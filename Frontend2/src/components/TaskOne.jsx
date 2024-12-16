import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { fadeIn } from "../hooks/variants";
import { useDeletingTask } from "../hooks/useDeletingTask.js";
function TaskOne(props) {
  const { deleteTask, isloading } = useDeletingTask();
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteTask(props._id);
    }
  };
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
