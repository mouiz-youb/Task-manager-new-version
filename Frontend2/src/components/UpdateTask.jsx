import React, { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useUpdateTask } from "../hooks/useUpdateTask.js";
function UpdateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const { id } = useParams();
  const { updateTask, error, isloading } = useUpdateTask();
  const task = {
    title: title,
    description: description,
    time: time,
  };
  const handleCreateTask = async (e) => {
    e.preventDefault();
    await updateTask(id, task);
  };
  console.log(id);
  return (
    <div className="create-task-form">
      <form action="" className="form-create-task" onSubmit={handleCreateTask}>
        <div className="after-form3"></div>
        <div className="after-form4"></div>
        <div className="header-create-task">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            update task
          </motion.h1>
        </div>
        <div className="section-input-create-task">
          <div className="input-section-fields">
            <motion.input
              onChange={(e) => setTitle(e.target.value)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              type="text"
              className="input-create-task"
              placeholder="Enter the Title"
            />
            <motion.input
              onChange={(e) => setTime(e.target.value)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              type="date"
              className="input-create-task"
              placeholder="Enter the date"
            />
          </div>
          {console.log(description)}
          <div className="description-section-fields">
            <motion.textarea
              onChange={(e) => setDescription(e.target.value)}
              initial={{ opacity: 0, x: 50, height: 40 }}
              animate={{ opacity: 1, x: 0, height: "80%" }}
              transition={{
                duration: 1,
                ease: [0, 0, 0, 0],
                delay: 0.5,
              }}
              placeholder="Enter the description"
            ></motion.textarea>
          </div>
        </div>
        <div className="section-btn-create-task">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
            type="submit"
            className="btn-create-task"
          >
            Updated
          </motion.button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTask;
