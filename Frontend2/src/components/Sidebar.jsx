import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";
import Profile from "./Profile";
import LinkSection from "./LinkSection";
import Button from "./Button";
import { useLogout } from "../hooks/useLogout";
import { useUser } from "../Store/useUser.js";
import { useInitializeAuth } from "../hooks/useInitializeAuth.js";
function Sidebar() {
  // const user = useUser((state) => state.user);
  const token = useUser((state) => state.token);
  useInitializeAuth();
  const logoutBtn = () => {
    const { logout } = useLogout();
    logout();
  };
  console.log(token);

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
        {token ? (
          <Button title="log out" to="/" className="btn-section-auth" />
        ) : (
          <div>
            <Button title="log in" to="/login" className="btn-section-auth" />
            <Button title="sign up" to="/singup" className="btn-section-auth" />
          </div>
        )}
        {/* <Button title="log in" to="/login" className="btn-section-auth" />
        <Button title="sign up" to="/singup" className="btn-section-auth" /> */}
      </div>
    </motion.div>
  );
}

export default Sidebar;
