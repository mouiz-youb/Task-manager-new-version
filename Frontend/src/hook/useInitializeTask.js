import { useEffect, useState } from "react";
import { useTask } from "../../Zustend-store/TaskStore";
import axios from "axios";
import toast from "react-hot-toast";

export const useInitializeTask = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    const ListTask = async () => {
      const response = await axios.get("http://localhost:3005/Task/AllTask");
      try {
        if (!response.data) {
          toast.error("No task found");
        }
        setTask(response.data);
        toast.success("Tasks loaded successfully!");
      } catch (error) {
        console.error("Error fetching tasks:", error);
        toast.error(
          error.response?.data?.error || "Failed to load tasks. Try again."
        );
      }
    };
    ListTask();
  }, []);
  return { task, setTask };
};
// const response = await axios.get("http://localhost:3005/Task/AllTask");
// try {
//   if (!response) {
//     toast.error("Error");
//   }
//   setTask(response.data);
// } catch (error) {
//   toast.error(error.response.data.error);
// }
// };
