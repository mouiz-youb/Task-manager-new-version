import React from "react";
import "../App.css";
import Links from "./Links";
function LinkSection() {
  return (
    <ul className="link-section">
      <Links title="home" to="/" />
      <Links title="task" to="/task" />
      <Links title="notification" to="/notification" />
      <Links title="podcast" to="/podcast" />
      <Links title="chat ai" to="/chatAi" />
    </ul>
  );
}

export default LinkSection;
