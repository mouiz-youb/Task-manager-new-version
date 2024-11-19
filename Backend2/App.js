import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routers/user.js";
import routerTask from "./routers/TaskRoutes.js";
const app = express();
const port = 3005;
const Userrouter = router;
const Taskrouter = routerTask;
// routes of the app
mongoose
  .connect(
    "mongodb+srv://youb:l66z7i79cd91BJEA@cluster0.zgmep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log(`not connected to database`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", Userrouter);
app.use("/Task", Taskrouter);
app.get("/", (req, res) => {
  res.send("Hello World form the king one ");
});
app.listen(port, () => {
  console.log(`the server is listen to the port ${port}`);
});
