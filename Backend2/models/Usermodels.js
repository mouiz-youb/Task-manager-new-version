import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
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
});
// Static signup method
userSchema.statics.signup = async function (username, email, password) {
  // the validation of the fields
  if (!email || !password) {
    throw Error(`All the fields must be filled`);
  }
  if (!validator.isEmail(email)) {
    throw Error(`The email not valid`);
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(`The password is not strong enough`);
  }
  // the first line to check that user who have this email does not exists in the database
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  // inside the last code we tranform the password into the hash format
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  //   the next line to store the user inside the database
  const user = await this.create({ username, email, password: hashPassword });
  // const userData = userObject;
  return user;
  // return {
  //   username: user.username,
  //   email: user.email,
  // };
};
// static methode to loign
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
