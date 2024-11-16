import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Zustend-store/AuthStore";
// import { useInitializeAuth } from "../hook/useInitializeAuth";
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
      <div className="small-profile">
        {user ? (
          <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ) : (
          <p>don't have any suer login</p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
