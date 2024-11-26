import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
function Descright() {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.9 }}
      className="right-side"
    >
      <h1>right side</h1>
    </motion.div>
  );
}

export default Descright;
