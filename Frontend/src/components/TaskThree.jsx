import React from "react";
import "../App.css";
import OneTask from "./OneTask";
import Nav from "./Nav";

function TaskThree() {
  return (
    <div className="Task-container-three">
      <div className="header-container">
        <h1>Last three task</h1>
      </div>
      <div className="Task-nav-links">
        <Nav />
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
