import React from "react";
import { Link } from "react-router-dom";
function TestList() {
  const tasks = [
    { id: 1, title: "Task One" },
    { id: 2, title: "Task Two" },
    { id: 3, title: "Task Three" },
  ];
  return (
    <div>
      <h2>Task list </h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tests/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestList;
