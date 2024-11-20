import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <ul className="nav-task">
      <li>
        <Link className="links-task" to="/alltask">
          All Task
        </Link>
      </li>
      <li>
        <Link className="links-task" to="/remider">
          Remider
        </Link>
      </li>
      <li>
        <Link className="links-task" to="/taskthree">
          look Task
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
