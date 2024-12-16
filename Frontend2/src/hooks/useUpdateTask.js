import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
export const useUpdateTask = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const navigate = useNavigate();
  const updateTask = async (_id, task) => {
    setIsloading(true);
    setError(false);
    {
      isloading ? toast.loading(`is loading`) : "";
    }
    try {
      const response = await axios.put(
        `http://localhost:3006/api/Task/updateTask/${_id}`,
        {
          task: task,
        }
      );
      if (response.status === 200) {
        toast.success("Task updated successfully");
        navigate("/alltask");
      }
    } catch (error) {
      setError(error.response.data.error);
      toast.error(error.response.data.error);
      console.log(error.response.data.error);
    } finally {
      setIsloading(false);
    }
  };
  return { updateTask, error, isloading };
};
