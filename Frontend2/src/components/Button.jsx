import React from "react";
import { Link } from "react-router-dom";
function Button(props) {
  return (
    <div className="btn-section-auth">
      <Link className="links-item" to={`${props.to}`}>
        {props.title}
      </Link>
    </div>
  );
}

export default Button;
