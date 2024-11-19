import mongoose from "mongoose";
// create the task model
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descreption: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
const Task = mongoose.model("task", TaskSchema);
export default Task;
// the scturture of the data of time is "year-month-dayThour:minute:second-sssz"
