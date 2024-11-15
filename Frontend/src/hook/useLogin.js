import { useState } from "react";
import { useAuth } from "../../Zustend-store/AuthStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const login = useAuth((state) => state.login);
  const navigate = useNavigate();
  // the request function
  const Login = async (email, password) => {
    setIsloading(true), setError(null);
    try {
      const response = await axios.post("http://localhost:3005/user/login", {
        email: email,
        password: password,
      });
      // const { userData, token } = response.data;
      const userData = response.data.email;
      const token = response.data.token;
      //Destructure response
      console.log("Signup Successful!", userData, token);
      // save user and the token inside the local storage
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", JSON.stringify(token));
      // update the useAuth store
      login(userData);
      navigate("/home");
    } catch (error) {
      // handel errors
      if (error.response) {
        console.error("Error Response:", error.response);
        setError(error.response.data?.error || "An unknown error occurred");
      } else {
        console.error(
          `Error: ${error.message || "An unknown error occurred2"}`
        );
        setError(`Error: ${error.message || "An unknown error occurred2"}`);
      }
    } finally {
      setIsloading(false);
    }
  };
  return { Login, isloading, error };
};
// setError(
//   error.response?.data?.message || "sign failded ,Please try again"
// );
