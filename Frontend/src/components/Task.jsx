import React from "react";
import TaskForm from "./TaskForm";
import Nav from "./Nav";
import Links from "./Links";
function Task() {
  return (
    <div className="Task-container">
      <div className="header-container">
        <h1>Create Task</h1>
      </div>
      <div className="Task-nav-links">
        <ul className="nav-task">
          <Links title="All Task" to="alltask" />
          <Links title="Remider" to="remider" />
          <Links title="Look Task" to="taskthree" />
        </ul>
      </div>
      <div className="form-create-task">
        <TaskForm />
      </div>
    </div>
  );
}

export default Task;
