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
    // find the existing task
    const existingTask = await Task.findById(id);
    if (!existingTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    // check for unchanged fields
    let hasUpdates = false;
    for (const key in updateTask) {
      if (updateTask[key] !== existingTask[key]) {
        hasUpdates = true;
        break;
      }
    }
    console.log(hasUpdates);
    if (!hasUpdates) {
      return res.status(400).json({ message: "No fields were updated." });
    }
    // merge the existing task data with the new updates
    const updatedData = { ...existingTask._doc, ...updateTask };
    const taskfound = await Task.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({ Tasks: taskfound, success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const GetOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const taskfound = await Task.findById(id);
    // check if this task existed
    if (!taskfound) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ taskfound, success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export default {
  CreateTask,
  GetAllTask,
  DeleteTask,
  UpdateTask,
  GetOneTask,
};
