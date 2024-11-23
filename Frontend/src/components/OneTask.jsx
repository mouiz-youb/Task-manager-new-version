import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
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
          <button className=" delete">
            <Link className="link-delete">delete</Link>
          </button>
          <button className=" update">
            <Link className="link-update" to="/updatetask">
              update
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneTask;
