import Task from "../Models/Taskmodels.js";

// create task router
const CreateTask = async (req, res) => {
  const { title, description, time } = req.body;
  console.log(req.body);
  try {
    if (!title || !time) {
      return res.status(400).json({
        error: "Please fill the title and time ",
      });
    }
    // const taskID = await generateTaskID();
    const task = await Task.create({
      title,
      description,
      time,
    });
    return res.status(201).json({
      message: "Task created successfully",
      task,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error creating task try again",
    });
  }
};
// get all tasks router
const GetAllTask = async (req, res) => {
  const Tasks = await Task.find({}).sort({ createAt: -1 });
  try {
    if (Tasks.length > 0) {
      return res.status(200).json({ Tasks, success: true });
    } else {
      return res.status(404).json({ message: "No tasks available" });
    }
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    res.status(500).json({ error: error.message });
  }
};
// delete task router
const DeleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const taskfound = await Task.findByIdAndDelete(id);
    if (!taskfound) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res
      .status(200)
      .json({ message: "Task deleted successfully", success: true, taskfound });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// update task router
const UpdateTask = async (req, res) => {
  const { id } = req.params;
  const updateTask = req.body;
  try {
    const taskfound = await Task.findByIdAndUpdate(id, updateTask, {
      new: true,
      runValidators: true,
    });
    if (!taskfound) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ task: taskfound, success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export default {
  CreateTask,
  GetAllTask,
  DeleteTask,
  UpdateTask,
};
