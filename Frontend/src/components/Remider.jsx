import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Links from "./Links";
function Remider() {
  return (
    <div className="Task-container">
      <div className="header-container">
        <h1>Remider Section</h1>
      </div>
      <div className="Task-nav-links">
        <ul className="nav-task">
          <Links title="Createtask" to="task" />
          <Links title="Remider" to="remider" />
          <Links title="Look Task" to="taskthree" />
        </ul>
      </div>
      <div className="form-create-task">
        <h1>hello </h1>
      </div>
    </div>
  );
}

export default Remider;
