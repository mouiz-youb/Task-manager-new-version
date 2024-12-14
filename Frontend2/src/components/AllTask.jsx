import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import TaskOne from "./TaskOne";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants.js";
import { IoIosArrowBack } from "react-icons/io";
function AllTask() {
  return (
    <div className="All-task-page">
      <div className="task-list-header-container">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "linear", delay: 0.5 }}
          className="task-list-header"
        >
          <Link to="/task" className="task-list-header-link-icon">
            <IoIosArrowBack className="arrow" />
          </Link>
          <Link to="/task" className="task-list-header-left">
            go to task page
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "linear", delay: 0.5 }}
          className="task-list-header-right"
        >
          <Link to="/createtask" className="task-list-header-right">
            create task
          </Link>
        </motion.div>
      </div>
      <ul className="task-list-nav-x">
        <Link className="link">home</Link>
        <Link className="link">home</Link>
        <Link className="link">home</Link>
        <Link className="link">home</Link>
        <Link className="link">home</Link>
      </ul>
      <div className="task-list">
        <TaskOne />
        <TaskOne />
        <TaskOne />
        <TaskOne />
        <TaskOne />
        <TaskOne />
        <TaskOne />
        <TaskOne />
      </div>
    </div>
  );
}

export default AllTask;
