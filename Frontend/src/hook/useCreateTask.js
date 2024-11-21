import { useState } from "react";
import { useTask } from "../../Zustend-store/TaskStore";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCreateTask = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const addtask = useTask((state) => state.addtask);
  const task = useTask((state) => state.task);
  const navigate = useNavigate();
  const createTask = async (title, descreption, time) => {
    setIsloading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:3005/Task/createTask",
        {
          title: title,
          descreption: descreption,
          time: time,
        }
      );
      if (response.status === 201) {
        const newtask = response.data;
        // localStorage.setItem("newtask", JSON.stringify(newtask));
        // const storeTask = JSON.parse(localStorage.getItem("newtask"));
        addtask(newtask);
        console.log(`create task Successful! ${newtask} ${task}`);
        toast.success("Create task  successful! let show it !");
      }
      navigate("/taskthree");
    } catch (error) {
      // case one the error object is not empty
      if (error.response) {
        setError(error.response.data.error);
        console.log(error.response.data.error);
        toast.error(error.response.data.error);
      } else if (error.status === 400) {
        setError(error.message);
        console.log(error.message);
        toast.error(error.message);
      } else {
        setError(error.message);
      }
    } finally {
      setIsloading(false);
    }
  };
  return { createTask, error, isloading };
};
// the error object is like that
// {
//     response: {
//       data: { error: "All fields are required." },  // Response body
//       status: 400,                                  // HTTP status code
//       statusText: "Bad Request",                    // HTTP status text
//       headers: { "content-type": "application/json" }, // Response headers
//       config: { ... }                               // Axios request config
//     },
//     request: {},                                    // Raw HTTP request object
//     message: "Request failed with status code 400", // Error message
//     config: { ... }                                 // Axios request config
//   }
