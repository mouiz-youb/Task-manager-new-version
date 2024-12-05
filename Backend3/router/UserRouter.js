import express from "express";
import requireAuth from "../middleware/requireAuth.js";
import UserController from "../Controllers/UserControllers.js";
const { Signup, Login } = UserController;
// require all the another pages after created the task functionnality
const router = express.Router();
router.use(requireAuth);
// the login router
router.post("/login", Login);
// the signup router
router.post("/signup", Signup);
export default router;
