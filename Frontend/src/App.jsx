import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FormX from "./components/FormX";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useInitializeAuth } from "./hook/useInitializeAuth";
function App() {
  useInitializeAuth();
  return (
    <div className="app-container">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<FormX />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
