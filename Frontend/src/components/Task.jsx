import React from "react";
import TaskForm from "./TaskForm";
import Nav from "./Nav";
function Task() {
  return (
    <div className="Task-container">
      <div className="header-container">
        <h1>Create Task</h1>
      </div>
      <div className="Task-nav-links">
        <Nav />
      </div>
      <div className="form-create-task">
        <TaskForm />
      </div>
    </div>
  );
}

export default Task;
