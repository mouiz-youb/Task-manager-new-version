import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Profile from "./Profile";
import LinkSection from "./LinkSection";
import Button from "./Button";
function Sidebar() {
  return (
    <motion.div className="Side-Bar-container">
      <Profile />
      <LinkSection />
      <div className="btn-section">
        <Button title="log in" to="/signup" />
        <Button title="sign up" to="/login" />
      </div>
    </motion.div>
  );
}

export default Sidebar;
