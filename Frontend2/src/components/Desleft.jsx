import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import HomeContent from "../json/HomeContent.json";
function Desleft() {
  const Homecontent = [
    {
      id: 1,
      description:
        "Our Task Manager helps you stay on top of your daily tasks and projects. Create, update, and track your tasks with ease. Organize your work using categories, set priorities, and never miss deadlines with our intuitive task management tools.",
    },
    {
      id: 2,
      description:
        "The Podcast Manager allows you to organize and listen to your favorite podcasts in one place. Subscribe to your preferred channels, track new episodes, and manage your podcast playlist effortlessly.",
    },
    {
      id: 3,
      description:
        "Our Notification System ensures you never miss an update. Receive real-time alerts for task deadlines, podcast updates, and AI chat responses. Customize your notification preferences for a distraction-free experience.",
    },
    {
      id: 4,
      description:
        "The AI Chat assistant is your personal productivity companion. Ask questions, get suggestions, or receive guidance on your tasks. Powered by advanced AI, our chat assistant is always ready to help you stay productive.",
    },
  ];
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className="left-section-of-home"
    ></motion.div>
  );
}

export default Desleft;
