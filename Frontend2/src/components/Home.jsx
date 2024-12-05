import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Descleft from "./Descleft";
import Descright from "./Descright";
// import image1 from "../../public/image1.jpg";
import image1 from "../../public/image1.webp";
import image2 from "../../public/image2.webp";
import image3 from "../../public/image3.webp";
import image4 from "../../public/image4.webp";
function Home() {
  return (
    <div className="Home-container">
      <div className="home-title">
        <h2>TaskSphere</h2>
        <p>
          Your all-in-one platform to manage tasks, collaborate, and boost
          productivity effortlessly.
        </p>
      </div>
      <div className="home-content">
        <div className="lines-home">
          <Descleft description="Our Task Manager helps you stay on top of your daily tasks and projects. Create, update, and track your tasks with ease. Organize your work using categories, set priorities, and never miss deadlines with our intuitive task management tools." />
          <Descright path={image1} />
        </div>
        <div className="lines-home">
          <Descleft description="The Podcast Manager allows you to organize and listen to your favorite podcasts in one place. Subscribe to your preferred channels, track new episodes, and manage your podcast playlist effortlessly." />
          <Descright path={image2} />
        </div>
        <div className="lines-home">
          <Descleft description="Our Notification System ensures you never miss an update. Receive real-time alerts for task deadlines, podcast updates, and AI chat responses. Customize your notification preferences for a distraction-free experience." />
          <Descright path={image3} />
        </div>
        <div className="lines-home">
          <Descleft description="The AI Chat assistant is your personal productivity companion. Ask questions, get suggestions, or receive guidance on your tasks. Powered by advanced AI, our chat assistant is always ready to help you stay productive." />
          <Descright path={image4} />
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="lines-home">
        <div className="lines-home">
          <motion.div
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="left-side"
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="right-side"
          ></motion.div>
        </div>
        <div className="lines-home">
  <div className="left-side"></div>
  <div className="right-side"></div>
</div>
<div className="lines-home">
  <div className="left-side"></div>
  <div className="right-side"></div>
</div>
<div className="lines-home">
  <div className="left-side"></div>
  <div className="right-side"></div>
</div> */
}
