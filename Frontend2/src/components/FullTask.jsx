import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Button from "./Button";
function FullTask() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.9 }}
      className="task-one-container"
    >
      <div className="task-one-header-three"></div>
      <div className="task-one-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga
        accusantium in omnis aperiam dicta impedit nostrum magnam delectus ex
        veniam neque pariatur minima dolor inventore deserunt voluptas, quis
        hic.
      </div>
      <div className="task-one-btn">
        <Button
          title="full task"
          to="/lastthreetask"
          className="btn-of-one-task full"
        />
        <p>Time</p>
        <Button title="Update" to="/" className="btn-of-one-task update" />
        <Button title="delete" to="/" className="btn-of-one-task delete" />
      </div>
    </motion.div>
  );
}

export default FullTask;
