import React, { useState } from "react";
import "../App.css";
function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  return (
    <div className="create-task-form">
      <form action="" className="form-create-task">
        <div className="after-form3"></div>
        <div className="after-form4"></div>
        <div className="header-create-task">
          <h1>create task </h1>
        </div>
        <div className="section-input-create-task">
          <div className="input-section-fields">
            <input
              type="text"
              className="input-create-task"
              placeholder="Enter the Title"
            />
            <input
              type="date"
              className="input-create-task"
              placeholder="Enter the date"
            />
          </div>
          <div className="description-section-fields">
            <textarea placeholder="Enter the description"></textarea>
          </div>
        </div>
        <div className="section-btn-create-task">
          <button type="submit" className="btn-create-task">
            Created
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
