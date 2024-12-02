import User from "../Models/Usermodels.js";
import jwt from "jsonwebtoken";
const createToken = (_id) => {
  return jwt.sign({}, "abcjdaljowep2830938437dnsmandna", {
    expiresIn: "1h",
  });
};
// the sign up controller
const Signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.signup(username, email, password);
    // create the token
    const token = createToken(user._id);
    const userData = {
      username: user.username,
      email: user.email,
      image: user.image, // Include image in the response
    };
    res.status(201).json({
      success: true,
      msg: "your are sign up",
      token: token,
      userData,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create the token
    const token = createToken(user._id);
    const userData = {
      username: user.username,
      email: user.email,
      image: user.image, // Include image in the response
    };
    res.status(200).json({
      success: true,
      msg: "your are log in",
      token: token,
      userData,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export default { Signup, Login };
