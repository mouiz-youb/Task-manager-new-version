import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Links from "./Links";
function Nav() {
  return (
    <ul className="nav-task">
      <Links title="All task" to="/alltask" />
      <Links title="Remider" to="/remider" />
      <Links title="Look Task" to="/taskthree" />
    </ul>
  );
}

export default Nav;
