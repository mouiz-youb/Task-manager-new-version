import express from "express";
import userControllers from "../controllers/userControllers.js";
const { loginUser, SignupUser } = userControllers;
const router = express.Router();
// login router
router.post("/login", loginUser);
// signup router
router.post("/signup", SignupUser);
export default router;
