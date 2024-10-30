import express from "express";
import mongoose from "mongoose";
import Users from "./models/Users.js";
import User from "./models/Users.js";
import bcrypt from "bcrypt";
import cors from "cors";
const port = 3004;
const app = express();
app.use(express.json());
app.use(cors());
// for parsing URL-encoded payloads and the form data available on req.body
app.use(express.urlencoded({ extended: true }));
// set the connetion with database
mongoose
  .connect(
    "mongodb+srv://ayoub:PTzns9CiHk8Wd63C@cluster0.cyjnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log(`not connected to database`));
//PTzns9CiHk8Wd63C
// mongodb+srv://ayoub:<db_password>@cluster0.cyjnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
app.get("/", (req, res) => {
  res.send(`the first endpoint`);
});
// user api
app.post("/register", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  let password = req.body.password;
  //   Number of salt round for bcypt
  const saltRounds = 10;
  console.log(`${username} ${email} ${password}`);
  try {
    // Check if the user already exists using the model itself
    const userExists = await Users.findOne({ username, email });
    if (!userExists) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // replace the hash password with original password
      // Create a new user instance only if the user does not exist
      const newUser = new Users({
        username: username,
        email: email,
        password: hashedPassword,
      });

      await newUser.save();
      return res.json(`The registration is seccusfuly`);
    } else {
      return res.status(400).json({ message: "User already exists " });
    }
  } catch (error) {
    console.error("Error while saving user:", error);
    return res.status(500).json({ message: "Error while saving user" });
  }
});
// login api
app.post("/login", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  let password = req.body.password;
  try {
    const Check = await User.findOne({ username, email });
    if (!Check) {
      return res.status(400).json({ message: "User not found " });
    } else {
      const isPasswordMatch = await bcrypt.compare(password, Check.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid password " });
      } else {
        return res.json(`the user exist and Welcome to the next page `);
      }
    }
  } catch (error) {
    console.error("Error while login:", error);
  }
});
// get all the user
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching articles." });
  }
});
//
app.listen(port, () => {
  console.log(`the server is listen to the port ${port}`);
});
