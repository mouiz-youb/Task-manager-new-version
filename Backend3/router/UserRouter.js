import express from "express";
import UserController from "../Controllers/UserControllers.js";
const Signup = UserController;
const router = express.Router();
// the login router
router.post("/login", () => {});
// the signup router
router.post("/signup", Signup);
export default router;
