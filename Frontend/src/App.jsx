import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FormX from "./components/FormX";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="app-container">
      <Toaster position="top-center" reverseOrder={false} />
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
