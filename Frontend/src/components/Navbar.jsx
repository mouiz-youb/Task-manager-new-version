import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Zustend-store/AuthStore";

function Navbar() {
  const user = useAuth((state) => state.user);
  return (
    <div className="Navbar">
      <div className="container-logo">
        <p>logo</p>
      </div>
      <ul className="nav-item-container">
        <li className="nav-item">
          <a href="/">home</a>
        </li>
        <li className="nav-item">
          <a href="/">about us</a>
        </li>
        <li className="nav-item">
          <a href="/">offer</a>
        </li>
        <li className="nav-item">
          <a href="/">shop</a>
        </li>
        <li className="nav-item">
          <a href="/">contact us</a>
        </li>
      </ul>
      <div className="small-profile">{user}</div>
    </div>
  );
}

export default Navbar;
