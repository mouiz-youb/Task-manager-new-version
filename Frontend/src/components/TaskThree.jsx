import React from "react";
import "../App.css";
import OneTask from "./OneTask";
import Nav from "./Nav";
import Links from "./Links";
import { useTask } from "../../Zustend-store/TaskStore";
import { useInitializeTask } from "../hook/useInitializeTask.js";
import { useListLastThreeTask } from "../hook/LastThreeTask.js";
function TaskThree() {
  const { threetask } = useListLastThreeTask();
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
        {threetask.length > 0 ? (
          <>
            {threetask.map((singleTask, index) => (
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

export default TaskThree;
