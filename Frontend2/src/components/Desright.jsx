import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import HomeContent from "../json/HomeContent.json";
function Desright() {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className="right-section-of-home"
    ></motion.div>
  );
}

export default Desright;
