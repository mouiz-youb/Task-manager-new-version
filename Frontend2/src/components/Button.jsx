import React from "react";
import { Link } from "react-router-dom";
function Button({ title, className, to, onClick }) {
  return (
    <div className={`${className}`}>
      <Link className="links-item" to={`${to}`} onClick={onClick}>
        {title}
      </Link>
    </div>
  );
}

export default Button;
