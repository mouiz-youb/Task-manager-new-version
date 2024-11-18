import jwt from "jsonwebtoken";
import User from "../models/Usermodels.js";
const requireAuth = async (req, res, next) => {
  // verify the authorization of the user
  const { authorization } = req.header;
  if (!authorization) {
    return res.status(401).json({ error: "authorization token requires" });
  }
  //   verify the token
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, "abcjdaljowep2830938437dnsmandna");
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorize" });
  }
};
export default requireAuth;
