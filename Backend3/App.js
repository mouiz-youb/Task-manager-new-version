import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./router/UserRouter.js";
import TaskRouter from "./router/TaskRouter.js";
import path from "path";
import { fileURLToPath } from "url";
mongoose
  .connect(
    "mongodb+srv://ayoub:jqqwnaZHPGz2wmpp@cluster0.fppaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log(`not connected to database`));
const app = express();
const UserRouters = UserRouter;
const TaskRouters = TaskRouter;
const port = 3006;
app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/user", UserRouters);
app.use("/api/Task", TaskRouter);
app.get("/get", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`the sever is listen to ten port ${port}`);
});
