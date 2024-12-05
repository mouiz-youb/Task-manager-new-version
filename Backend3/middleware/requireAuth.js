import jwt from "jsonwebtoken";
import Usermodels from "../Models/Usermodels.js";
const requireAuth = async (req, res, next) => {
  // verify the authorization of the user
  const { authorizated } = req.header;
  if (!authorizated) {
    return res.status(401).send({ error: "Please login or signup." });
  }
  //   verify the token
  const token = authorizated.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, "abcjdaljowep2830938437dnsmandna");
    req.user = await Usermodels.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorize" });
  }
};
export default requireAuth;
