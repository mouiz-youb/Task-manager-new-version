import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Button from "./Button";
import { CiMenuKebab } from "react-icons/ci";
function FullTask() {
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
        <h2 className="title-full-task">Full Task</h2>

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
      <div className="task-one-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga
        accusantium in omnis aperiam dicta impedit nostrum magnam delectus ex
        veniam neque pariatur minima dolor inventore deserunt voluptas, quis
        hic.
      </div>
      <div className="task-one-btn">
        {/* <Button
          title="full task"
          to="/lastthreetask"
          className="btn-of-one-task full"
        /> */}
        <p>Time</p>
        <Button title="Update" to="/" className="btn-of-one-task update" />
        <Button title="delete" to="/" className="btn-of-one-task delete" />
      </div>
    </motion.div>
  );
}

export default FullTask;
