import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import path from "path"; // Import the "path" module to handle file paths
import { fileURLToPath } from "url"; // For ES modules
// Resolve the directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Path to the default image
const defaultImagePath = path.join(__dirname, "../images/defaultImage.jpg");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You can store the image's URL or path
    required: false, // Set to true if the image is mandatory
    default: defaultImagePath,
  },
});
userSchema.statics.signup = async function (username, email, password) {
  // the validation of the fields
  if (!username || !email || !password) {
    throw Error("Please provide all fields");
  }
  // check if the email is valid
  if (!validator.isEmail(email)) {
    throw Error("Please provide a valid email");
  }
  // check if the pasword valid and strong
  if (!validator.isStrongPassword(password)) {
    throw Error("Please provide a strong password");
  }
  // check if the user already exist
  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw Error("Email already in use try again with another user email");
  }
  // inside the last code we hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // create a new user inside the data base
  const user = await this.create({ username, email, password: hashedPassword });
  return user;
};
userSchema.statics.login = async function (email, password) {
  // first check is the fields is not empty
  if (!email || !password) {
    throw new Error("All the fields must be filled");
  }
  // the next line to check if the user with this email exist in the database
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("the user who have this email not exist");
  }
  // the nest line check if the password correct or not
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("the password is not correct");
  }
  const userObject = user.toObject(); // Convert Mongoose document to plain object
  delete userObject.password; // Remove the password field
  const userData = userObject; // Store the remaining fields in userData
  const username = userData.username;
  // const email = userData.email;
  // the next line return the User
  return { username, email };
};
const User = mongoose.model("user", userSchema);
export default User;
