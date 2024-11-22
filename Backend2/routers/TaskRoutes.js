import express from "express";
import TaskController from "../controllers/TaskController.js";
const routerTask = express.Router();
const {
  CreateTask,
  DeleteTask,
  UpdateTask,
  ListAllTask,
  ListoneTask,
  SearchTimeTask,
} = TaskController;
// create Task router
routerTask.post("/createTask", CreateTask);
//  delete task
routerTask.delete("/deleteTask/:title", DeleteTask);
// list all task
routerTask.get("/AllTask", ListAllTask);
// search one Task by Titel
routerTask.get("/OneTask/:title", ListoneTask);
// search by time
routerTask.get("SearchTime/:time", SearchTimeTask);
// update Task
routerTask.put("/Update/:title", UpdateTask);
export default routerTask;
// app.use(express.urlencoded({ extended: true }));

// {"title":"first test",
//   "descreption":"hello world",
//   "time":"2023-12-09"
//   }
