import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeIn } from "./hooks/variants";
function App() {
  // Get the current route path
  const location = useLocation();

  // Check if the current route is for login or signup
  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/login";
  return (
    <div className={`app-container ${isAuthPage ? "auth-page" : ""}`}>
      <Toaster position="top-center" reverseOrder={false} />
      {!isAuthPage && <Sidebar />} {/* Hide Sidebar on signup and login */}
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
