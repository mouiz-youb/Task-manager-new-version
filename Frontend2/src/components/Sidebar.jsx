import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Profile from "./Profile";
import LinkSection from "./LinkSection";
import Button from "./Button";
function Sidebar() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className="Side-Bar-container"
    >
      <Profile />
      <LinkSection />
      <div className="btn-section">
        <Button title="log in" to="/signup" className="btn-section-auth" />
        <Button title="sign up" to="/login" className="btn-section-auth" />
      </div>
    </motion.div>
  );
}

export default Sidebar;
