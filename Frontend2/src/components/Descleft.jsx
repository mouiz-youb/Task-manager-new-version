import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
function Descleft(props) {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.9 }}
      className="left-side"
    >
      <p>{props.description}</p>
    </motion.div>
  );
}

export default Descleft;
