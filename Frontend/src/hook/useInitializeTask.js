import { useEffect } from "react";
import { useTask } from "../../Zustend-store/TaskStore";

export const useInitializeTask = () => {
  const addtask = useTask((state) => state.addtask);
  const task = useTask((state) => state.task);
  useEffect(() => {
    const storeTask = JSON.parse(localStorage.getItem("newtask"));
    if (storeTask) {
      if (!task.some((t) => t.title === storeTask.title)) {
        console.log("Adding task from localStorage: ", storeTask);
        addtask(storeTask);
      } else {
        console.log("Task already exists in state: ", storeTask);
      }
    } else {
      console.log("no task found in locale storage");
    }
  }, [addtask, task]);
};
