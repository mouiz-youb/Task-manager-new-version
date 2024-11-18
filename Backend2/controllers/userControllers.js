import User from "../models/Usermodels.js";
import jwt from "jsonwebtoken";
// Create the token function to used in loginuser & signupuser
const createToken = (_id) => {
  return jwt.sign({ _id }, "abcjdaljowep2830938437dnsmandna", {
    expiresIn: "3d",
  });
};
// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    // create the token
    const token = createToken(user._id);
    res.status(200).json({ mgs: "your are login ", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// signup user
const SignupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.signup(username, email, password);
    // create the token
    const token = createToken(user._id);
    const userData = {
      username: username,
      email: email,
    };
    res.status(200).json({ msg: "your are sign up", userData, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export default { loginUser, SignupUser };
