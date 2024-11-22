import { useEffect } from "react";
import { useTask } from "../../Zustend-store/TaskStore";
import axios from "axios";
import toast from "react-hot-toast";

export const useInitializeTask = () => {
  const addtask = useTask((state) => state.addtask);
  const task = useTask((state) => state.task);
  useEffect(() => {
    // fetch tasks from the backned api
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3005/Task/AllTask");
        const Tasks = response.data;
        // add each task to zustand store
        Tasks.forEach((task) => {
          let isExistingTask = false;
          for (let i = 0; i < task.length; i++) {
            if (task[i]._id === task._id) {
              isExistingTask = true;
              break; // If we find a match, stop checking further
            }
          }
          if (!isExistingTask) {
            addtask(task); // Only add the task if it doesn't already exist in the state
          }
        });
      } catch (error) {
        console.error("Error fetching tasks from the backend:", error);
        toast.error(error);
      }
    };
    fetchTasks();
  }, [addtask]);
};
