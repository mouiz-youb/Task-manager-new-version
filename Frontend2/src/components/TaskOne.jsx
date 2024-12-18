import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Button from "./Button";
import { fadeIn } from "../hooks/variants";
import { useDeletingTask } from "../hooks/useDeletingTask.js";
import { useNavigate } from "react-router-dom";
function TaskOne(props) {
  const { deleteTask, isloading } = useDeletingTask();
  const id = props._id;
  const Navigate = useNavigate();
  const handleDelete = async () => {
    toast(
      (t) => (
        <div className="custom-toast-styling">
          <p>Are you sure you want to delete this task?</p>
          <div>
            {/* Delete Button */}
            <button
              onClick={async () => {
                toast.dismiss(t.id); // Close confirmation toast
                try {
                  await deleteTask(props._id); // Await delete task
                  toast.success("Task deleted successfully!", {
                    duration: 3000,
                  }); // Success toast
                  Navigate("/alltask"); // Navigate to all tasks
                } catch (error) {
                  toast.error("Failed to delete task!"); // Error toast
                }
              }}
            >
              Delete
            </button>

            {/* Cancel Button */}
            <button
              onClick={() => {
                toast.dismiss(t.id); // Close confirmation toast
                Navigate("/alltask"); // Navigate back
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: 10000, // Toast visible for 10 seconds
      }
    );
  };
  // if (window.confirm("Are you sure you want to delete this task?")) {
  //   await deleteTask(props._id);
  // }
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.9 }}
      className="task-one-container"
    >
      <div className="task-one-header">{props.title}</div>
      <div className="task-one-description">{props.description}</div>
      <div className="task-one-btn">
        <Button
          title="full task"
          to="/lastthreetask"
          className="btn-of-one-task full"
        />
        <p>{props.time}</p>
        <Button
          title="Update"
          to={`/updatetask/${props._id}`}
          className="btn-of-one-task update"
        />
        <Button
          title="delete"
          disabled={isloading}
          onClick={handleDelete}
          className="btn-of-one-task delete"
        />
      </div>
    </motion.div>
  );
}

export default TaskOne;
