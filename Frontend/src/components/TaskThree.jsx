import React from "react";
import "../App.css";
import OneTask from "./OneTask";
import Nav from "./Nav";
import Links from "./Links";
function TaskThree() {
  return (
    <div className="Task-container-three">
      <div className="header-container">
        <h1>Last three task</h1>
      </div>
      <div className="Task-nav-links">
        <ul className="nav-task">
          <Links title="Createtask" to="task" />
          <Links title="Remider" to="remider" />
          <Links title="All Task" to="alltask" />
        </ul>
      </div>
      <div className="Last-three-task">
        <OneTask />
        <OneTask />
        <OneTask />
      </div>
    </div>
  );
}

export default TaskThree;
