import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
function Home() {
  return (
    <motion.div
      className="Home-container"
      variants={fadeIn("right", 2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
    >
      <h1>Welcome to my website</h1>
    </motion.div>
  );
}

export default Home;
