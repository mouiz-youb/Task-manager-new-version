import express from "express";
import userControllers from "../controllers/userControllers.js";
import requireAuth from "../middleware/requireAuth.js";
const { loginUser, SignupUser } = userControllers;
const router = express.Router();
// require all the another pages after created the task functionnality
// router.use(requireAuth);
// login router
router.post("/login", loginUser);
// signup router
router.post("/signup", SignupUser);
export default router;
