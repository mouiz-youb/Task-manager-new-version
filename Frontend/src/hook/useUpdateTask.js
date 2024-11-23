import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const useUpdateTask = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const update = async (title, newtitle, descreption, time) => {
    setIsloading(true);
    {
      isloading ? toast.loading(`is loading`) : "";
    }
    setError(null);
    try {
      const response = await axios.put(
        `http://localhost:3005/Task/Update/${title}`,
        { newtitle, descreption, time }
      );
      if (response.status === 200) {
        const updatetask = response.data.task;
        console.log(`Update task Successful! ${updatetask} `);
        toast.success("Update task  successful! let show it !");
      }
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
  return { update, error, isloading };
};
