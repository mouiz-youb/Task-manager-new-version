import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
export const useDeletingTask = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const navigate = useNavigate();
  const deleteTask = async (id) => {
    setIsloading(true);
    setError(null);
    try {
      const response = await axios.delete(
        `http://localhost:3006/api/Task/deleteTask/${id}`
      );
      if (response.status === 200 && response.data.success === true) {
        toast.success(response.message);
      }
      navigate("/task");
    } catch (error) {
      setError(error.response.data.error);
      toast.error(error.response.data.error);
      console.log(error.response.data.error);
    } finally {
      setIsloading(false);
    }
  };
  return { deleteTask, error, isloading };
};
