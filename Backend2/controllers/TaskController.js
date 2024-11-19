import mongoose from "mongoose";
import Task from "../models/Taskmodels.js";
// craete Task
const CreateTask = async (req, res) => {
  const { title, descreption, time } = req.body;
  try {
    const task = await Task.create({ title, descreption, time });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete Task
const DeleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid({ id: id })) {
    return res.status(404).json({ error: "Invalid id" });
  }
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return res.status(400).json({ error: "invalid id " });
  }
  return res.status(200).json({ message: "Task deleted successfully" }, task);
};
// update Task
const UpdateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid({ id: id })) {
    return res.status(404).json({ error: "Invalid id" });
  }
  const task = await Task.findByIdAndUpdate(
    { id: id },
    {
      title: req.body.title,
      descreption: req.body.descreption,
      time: req.body.time,
    }
  );
  if (!task) {
    return res.status(400).json({ error: "invalid id " });
  }
  return res.status().json({ messege: "the update is seccese" }, task);
};
// list all Task
const ListAllTask = (req, res) => {
  res.send(`list all Task`);
};
// list one Task by Titel
const ListoneTask = (req, res) => {
  res.send(`list one Task`);
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
