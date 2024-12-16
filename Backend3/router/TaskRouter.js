import express from "express";
import requireAuth from "../middleware/requireAuth.js";

import TaskControllers from "../Controllers/TaskControllers.js";
const router = express.Router();
// router.use(requireAuth);
const { CreateTask, GetAllTask, DeleteTask, UpdateTask, GetOneTask } =
  TaskControllers;
// create task router
router.post("/createtask", CreateTask);
// get all tasks router
router.get("/getAll", GetAllTask);
// get a task with id
router.get("/gettask/:id", GetOneTask);
// delete task router
router.delete("/deleteTask/:id", DeleteTask);
// update task router
router.put("/updateTask/:id", UpdateTask);
export default router;
