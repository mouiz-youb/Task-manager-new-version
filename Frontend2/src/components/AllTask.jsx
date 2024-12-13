import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import TaskOne from "./TaskOne";
function AllTask() {
  return (
    <div className="All-task-page">
      <div className="task-list-header">
        <Link to="/task" className="task-list-header-left">
          go to task page
        </Link>
        <Link to="/createtask" className="task-list-header-right">
          create task
        </Link>
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
