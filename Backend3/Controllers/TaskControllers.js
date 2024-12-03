import Task from "../Models/Taskmodels.js";
// create task router
const CreateTask = async (req, res) => {
  const { title, descreption, time } = req.body;
  try {
    if (!title || !time) {
      return res.status(400).json({
        error: "Please fill the title and time ",
      });
    }
    const task = await new Task.create({
      title,
      descreption,
      time,
    });
    return res.status(201).json({
      message: "Task created successfully",
      task,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error creating task try again",
    });
  }
};
// get all tasks router
const GetAllTask = async (req, res) => {};
// delete task router
const DeleteTask = async (req, res) => {};
// update task router
const UpdateTask = async (req, res) => {};
export default {
  CreateTask,
  GetAllTask,
  DeleteTask,
  UpdateTask,
};
