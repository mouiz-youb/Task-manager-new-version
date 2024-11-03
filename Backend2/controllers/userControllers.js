import User from "../models/Usermodels.js";

// login user
const loginUser = async (req, res) => {
  res.json({ mssg: `login user` });
};
// signup user
const SignupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.signup(username, email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.mssg });
  }
};
export default { loginUser, SignupUser };
