import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./router/UserRouter.js";
import TaskRouter from "./router/TaskRouter.js";
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
app.use(cors);

app.use("/api/user", UserRouters);
app.use("/api/Task", TaskRouter);
app.get("/get", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`the sever is listen to ten port ${port}`);
});
