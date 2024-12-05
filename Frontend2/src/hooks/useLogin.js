import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useUser } from "../Store/useUser.js";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const navigate = useNavigate();
  const login = useUser((state) => state.login);
  // the request function
  const Login = async (email, password) => {
    setIsloading(true);
    setError(null);
    const toastID = toast.loading(`is loading`);
    try {
      const response = await axios.post(
        "http://localhost:3006/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (!response) {
        toast.error("Failed to login");
      }
      toast.dismiss(toastID);
      const userData = response.data.userData;
      const token = response.data.token;
      login(userData, token);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userData", JSON.stringify(userData));
      toast.success("Signup successful! Welcome to the platform!");
      navigate("/task");
    } catch (error) {
      toast.dismiss(toastID);
      setError(error.response?.data || "An error occurred");
      console.log(error.response?.data?.error);
      toast.error(error.response?.data?.error || "Signup failed.");
    } finally {
      setIsloading(false);
    }
  };
  return { Login, isloading, error };
};
