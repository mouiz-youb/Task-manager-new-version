import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Desleft from "./Desleft";
import Desright from "./Desright";
function HomeLines() {
  return (
    <motion.div className="home-line-content">
      <Desleft />
      <Desright />
    </motion.div>
  );
}

export default HomeLines;
