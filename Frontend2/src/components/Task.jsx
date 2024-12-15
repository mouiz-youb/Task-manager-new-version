import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../hooks/variants";
import Title from "./Title";
import Links from "./Links";
import Button from "./Button";
import TaskOne from "./TaskOne";
import { useInitTask } from "../hooks/useInitTask";
function Task() {
  const task = useInitTask();
  return (
    <div className="Task-container">
      <div className="title-of-task">
        <Title
          title="TaskHub"
          description="  Streamline your workflow by creating, organizing, and tracking tasks
          all in one place."
        />
      </div>
      <div className="nav-of-task">
        <motion.ul
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="nav-bar-task-left"
        >
          <Links to="/alltask" title="all task" />
          <Links to="/" title="remider" />
          <Links to="/lastthreetask" title="last 3 task" />
        </motion.ul>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="nav-bar-task-right"
        >
          <Button
            to="/createtask"
            title="create task"
            className="btn-create-task"
          />
        </motion.div>
      </div>
      <div className="Last-Tasks">
        {task.task.length > 0 ? (
          task.task.map((task) => (
            <TaskOne
              key={task._id}
              title={task.title}
              description={task.description}
              time={task.time}
            />
          ))
        ) : (
          <p
            style={{
              fontSize: "20px",
              color: "wheat",
            }}
          >
            No task available
          </p>
        )}
      </div>
    </div>
  );
}

export default Task;
