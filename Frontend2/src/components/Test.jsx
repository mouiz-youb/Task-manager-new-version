import React from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";
function Test() {
  const { id } = useParams();
  return (
    <div>
      <h2>Task details </h2>
      <h2>Task id :{id}</h2>
    </div>
  );
}

export default Test;
