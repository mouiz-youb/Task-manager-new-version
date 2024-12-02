import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import defaultImage from "../images/defaultImage.jpg";
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
    default: defaultImage,
  },
});
const User = mongoose.model("user", userSchema);
export default User;
