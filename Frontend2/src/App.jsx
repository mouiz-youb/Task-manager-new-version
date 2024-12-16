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
import Task from "./components/Task";
import LastThreTask from "./components/LastThreTask";
import AllTask from "./components/AllTask";
import CreateTask from "./components/CreateTask";
import Test from "./components/Test";
import TestList from "./components/TestList";
import UpdateTask from "./components/UpdateTask";
function App() {
  // Get the current route path
  const location = useLocation();

  // Check if the current route is for login or signup
  const isAuthPage =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/createtask" ||
    location.pathname.startsWith("/updatetask/");
  return (
    <div className={`app-container ${isAuthPage ? "auth-page" : ""}`}>
      <Toaster position="top-center" reverseOrder={false} />
      {!isAuthPage && <Sidebar />} {/* Hide Sidebar on signup and login */}
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<Task />} />
          <Route path="/lastthreetask" element={<LastThreTask />} />
          <Route path="/alltask" element={<AllTask />} />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/updatetask/:id" element={<UpdateTask />} />
          <Route path="/testlist/" element={<TestList />} />
          <Route path="/tests/:id" element={<Test />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
