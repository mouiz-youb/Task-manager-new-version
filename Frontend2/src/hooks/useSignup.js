import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const navigate = useNavigate();
  const signup = async (username, email, password) => {
    setIsloading(true);
    setError(null);
    // {
    //   isloading ? toast.loading(`is loading`) : "";
    // }
    try {
      const response = await axios.post(
        "http://localhost:3006/api/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      const userData = response.data.userData;
      const token = response.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userData", JSON.stringify(userData));
      toast.success("Signup successful! Welcome to the platform!");
      navigate("/task");
    } catch (error) {
    } finally {
      setIsloading(false);
    }
  };
  return { signup, isloading, error };
};
