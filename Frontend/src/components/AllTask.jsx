import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Links from "./Links";
import { useTask } from "../../Zustend-store/TaskStore";
import { useInitializeTask } from "../hook/useInitializeTask";
import OneTask from "./OneTask";
function AllTask() {
  const { task } = useInitializeTask();
  // const task = useTask((state) => state.task);
  return (
    <div className="Task-container">
      <div className="header-container">
        <h1>Look all Task</h1>
      </div>
      <div className="Task-nav-links">
        <ul className="nav-task">
          <Links title="Createtask" to="task" />
          <Links title="Remider" to="remider" />
          <Links title="Look Task" to="taskthree" />
        </ul>
      </div>
      <div className="show-all-task">
        {task.length > 0 ? (
          <>
            {task.map((singleTask, index) => (
              <OneTask
                title={singleTask.title}
                key={index}
                descreption={singleTask.descreption}
                time={singleTask.time}
              />
            ))}
          </>
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
}

export default AllTask;
