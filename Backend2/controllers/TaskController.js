import mongoose from "mongoose";
import Task from "../models/Taskmodels.js";
// craete Task
const CreateTask = async (req, res) => {
  const { title, descreption, time } = req.body;
  if (!title || !descreption || !time) {
    return res.status(400).json({ error: "All fields are required." });
  }
  try {
    const task = await Task.create({ title, descreption, time });
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error.message);
    res.status(400).json({ error: error.message });
  }
};
// delete Task
const DeleteTask = async (req, res) => {
  // const { id } = req.params;
  // if (!mongoose.Types.ObjectId.isValid({ id: id })) {
  //   return res.status(404).json({ error: "Invalid id" });
  // }
  // const task = await Task.findByIdAndDelete(id);
  // if (!task) {
  //   return res.status(400).json({ error: "invalid id " });
  // }
  // return res.status(200).json({ message: "Task deleted successfully" }, task);
  const { title } = req.params;
  try {
    const TaskFound = await Task.findOneAndDelete({ title });
    if (!TaskFound) {
      return res.status(404).json({ error: "Task nont found" });
    }
    return res
      .status(200)
      .json({ message: "Task deleted successfully", TaskFound });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// update Task
const UpdateTask = async (req, res) => {
  const { title } = req.params;
  try {
    const TaskFound = await Task.findOne({ title });
    if (!TaskFound) {
      return res.status(404).json({ error: "Task not found" });
    }
    const { newtitle, descreption, time } = req.body;
    const updatedTask = await Task.findOneAndUpdate(
      { title },
      {
        title: newtitle || TaskFound.title,
        descreption: descreption || TaskFound.descreption,
        time: time || TaskFound.time,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    console.error("Error updating task:", error.message);
    res.status(500).json({ error: "Server error during task update" });
  }
};
// list all Task
const ListAllTask = async (req, res) => {
  const Tasks = await Task.find({}).sort({ createdAt: -1 });
  try {
    if (Tasks.length > 0) {
      res.status(200).json(Tasks);
    } else {
      res.status(404).json({ message: "No tasks available" });
    }
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    res.status(500).json({ error: error.message });
  }
};
// list one Task by Titel
// routerTask.get("OneTask/:title", ListoneTask);
const ListoneTask = async (req, res) => {
  const { title } = req.params;
  // first i need to find the task who have this title
  try {
    const TaskFound = await Task.findOne({ title });
    if (!TaskFound) {
      console.log(`the task not found`);
      return res.status(404).json({ error: "task not found" });
    }
    return res.status(200).json(TaskFound);
  } catch (error) {
    console.log("Error fetching task:", error.message);
    res.status(500).json({ error: error.message });
  }
};
//search by Time
const SearchTimeTask = (req, res) => {
  res.send(`search Task`);
};
export default {
  CreateTask,
  DeleteTask,
  UpdateTask,
  ListAllTask,
  ListoneTask,
  SearchTimeTask,
};
