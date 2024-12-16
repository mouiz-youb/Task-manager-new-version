import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Button from "./Button";
import { CiMenuKebab } from "react-icons/ci";
function FullTask(props) {
  const [viseble, setViseble] = useState(false);
  const [taskStatus, setTaskStatus] = useState("");
  const toggleVisibility = () => {
    setViseble((prev) => !prev); // Toggles between true and false
  };
  const changeStatus = (taskStatus) => {
    setTaskStatus(taskStatus);
    setViseble(false); // Hide the menu after selection
  };
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.9 }}
      className="task-one-container"
    >
      <div className="task-one-header-three">
        <h2 className="title-full-task">{props.title}</h2>

        <p className={taskStatus ? `status-full-task` : `hide-status`}>
          {taskStatus ? taskStatus : null}
        </p>
        <CiMenuKebab className="icon-full-task" onClick={toggleVisibility} />
        {viseble && (
          <div className="visibel">
            <p onClick={() => changeStatus("to do")}>to do</p>
            <p onClick={() => changeStatus("on going")}>on going</p>
            <p onClick={() => changeStatus("done")}>done</p>
          </div>
        )}
      </div>
      <div className="task-one-description">{props.description}</div>
      <div className="task-one-btn">
        {/* <Button
          title="full task"
          to="/lastthreetask"
          className="btn-of-one-task full"
        /> */}
        <p>{props.time}</p>
        <Button
          title="Update"
          to={`/updatetask/${props._id}`}
          className="btn-of-one-task update"
        />
        <Button title="delete" to="/" className="btn-of-one-task delete" />
      </div>
    </motion.div>
  );
}

export default FullTask;
