import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Links(props) {
  return (
    <li>
      <Link className="links-task" to={`/${props.to}`}>
        {props.title}
      </Link>
    </li>
  );
}

export default Links;
