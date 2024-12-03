import express from "express";
import TaskControllers from "../Controllers/TaskControllers.js";
const router = express.Router();
const { CreateTask, GetAllTask, DeleteTask, UpdateTask } = TaskControllers;
// create task router
router.post("/createtask", CreateTask);
// get all tasks router
router.get("/getAll", GetAllTask);
// delete task router
router.delete("/deleteTask", DeleteTask);
// update task router
router.put("/updateTask", UpdateTask);
export default router;
