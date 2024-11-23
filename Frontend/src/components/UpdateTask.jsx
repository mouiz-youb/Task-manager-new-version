import React from "react";
import FormX from "./FormX";
import Nav from "./Nav";
import Links from "./Links";
function UpdateTask() {
  return (
    <div className="Task-container">
      <div className="header-container">
        <h1>update Task</h1>
      </div>
      <div className="Task-nav-links">
        <ul className="nav-task">
          <Links title="All Task" to="alltask" />
          <Links title="Remider" to="remider" />
          <Links title="Look Task" to="taskthree" />
        </ul>
      </div>
      <div className="form-create-task">
        <FormX
          formTitle="Update Task"
          inputOne="Write the previous title"
          inputtwo="update the news title"
          taskArea="update the descreption"
          btn="Update Task"
        />
      </div>
    </div>
  );
}

export default UpdateTask;
