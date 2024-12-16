import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["to_do", "in_progress", "done"],
    default: "to_do",
  },
  time: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

const Task = mongoose.model("task", TaskSchema);
export default Task;
