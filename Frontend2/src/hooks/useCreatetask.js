import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const useCreateTask = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const navigate = useNavigate();
  const createTask = async (title, descreption, time) => {
    setIsloading(true);
    setError(false);
    {
      isloading ? toast.loading(`is loading`) : "";
    }
    try {
      const response = await axios.post(
        "http://localhost:3006//api/Task/createtask",
        {
          title: title,
          descreption: descreption,
          time: time,
        }
      );
      if (response.status === 201) {
        const newtask = response.data;
        toast.success("Create task  successful! let show it !");
      }
      navigate("/alltask");
    } catch (error) {
      setError(response.error);
    } finally {
      setIsloading(false);
    }
  };
  return { createTask, error, isloading };
};
