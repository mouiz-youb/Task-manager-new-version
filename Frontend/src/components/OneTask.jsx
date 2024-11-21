import React from "react";
import "../App.css";
function OneTask(props) {
  return (
    <div className="one-task">
      <div className="Task-title">
        <h1> {props.title} </h1>
      </div>
      <div className="task-descreption"> {props.descreption} </div>
      <div className="task-time">
        <div className="time-section"> {props.time} </div>
        <div className="btn-section">
          <button>delete</button>
          <button>update</button>
        </div>
      </div>
    </div>
  );
}

export default OneTask;
