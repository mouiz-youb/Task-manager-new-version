import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
function Descright(props) {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.9 }}
      className="right-side"
      style={{
        backgroundImage: `url(${props.path})`,
      }}
    >
      {/* <img src={props.path} alt="" className="image-home-right-side" /> */}
    </motion.div>
  );
}

export default Descright;
