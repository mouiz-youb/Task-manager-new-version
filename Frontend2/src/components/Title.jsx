import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import "../App.css";
function Title(props) {
  return (
    <div className="title-of-task">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0.9 }}
      >
        {props.title}
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0.9 }}
      >
        {props.description}
      </motion.p>
    </div>
  );
}

export default Title;
