import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useInitTask = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    const ListTask = async () => {
      const response = await axios.get("http://localhost:3006/api/Task/getAll");
      try {
        if (!response.data) {
          toast.error("No task found ");
        }
        if (response.status === 200) {
          setTask(response.data.Tasks);
          console.log(response.data.Tasks);
          toast.success("Tasks loaded successfully!");
        }
        // setTask(response.data.Tasks);
        // console.log(task);
      } catch (error) {
        toast.error(
          error.response?.data?.error || "Failed to load tasks. Try again."
        );
      }
    };
    ListTask();
  }, []);
  return { task, setTask };
};
