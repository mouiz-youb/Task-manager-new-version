import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useListLastThreeTask = () => {
  const [threetask, setThreeTask] = useState([]);
  useEffect(() => {
    const getThreeTask = async () => {
      const response = await axios.get(
        "http://localhost:3005/Task/LastThreeTask"
      );
      try {
        if (!response.data) {
          toast.error(`No task found`);
        }
        setThreeTask(response.data);
        toast.success("Tasks loaded successfully!");
      } catch (error) {
        console.error("Error fetching tasks:", error);
        toast.error(
          error.response?.data?.error || "Failed to load tasks. Try again."
        );
      }
    };
    getThreeTask();
  }, []);
  return { threetask, setThreeTask };
};
