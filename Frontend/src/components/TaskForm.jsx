import React, { useState } from "react";
import "../App.css";
import { useCreateTask } from "../hook/useCreateTask";
function TaskForm(props) {
  const [title, setTitle] = useState();
  const [descreption, setDescreption] = useState();
  const [date, setDate] = useState();
  const { createTask, error, isloading } = useCreateTask();
  const HandleTask = async (e) => {
    e.preventDefault();
    const task = {
      title: title,
      descreption: descreption,
      date: date,
    };
    console.log(task);
    await createTask(title, descreption, date);
  };
  return (
    <form onSubmit={HandleTask} className="task-form">
      <div className="header-task-form">
        <h1> {`${props.formTitle}`} </h1>
      </div>
      <div className="input-task-form">
        <div className="input-task-form-left">
          <input
            type="text"
            className="input-Task"
            placeholder={`${props.inputOne}`}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="date"
            className="input-Task "
            placeholder="Enter Task time"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="input-task-form-right">
          <textarea
            className="input-Task input-desX"
            placeholder={`${props.taskArea}`}
            rows="5" // Adjust number of rows as needed
            onChange={(e) => {
              setDescreption(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="btn-task-form">
        <button type="submit"> {`${props.btn}`} </button>
      </div>
    </form>
  );
}

export default TaskForm;
