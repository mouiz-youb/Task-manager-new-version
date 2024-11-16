import { useState } from "react";
import { useAuth } from "../../Zustend-store/AuthStore.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
// export const useSignup = () => {
//   // const user
//   const [error, setError] = useState(null);
//   const [isloading, setIsloading] = useState(null);
//   const signup = async (username, email, password) => {
//     setIsloading(true), setError(null);
//     const response = await axios
//       .post("/user/signup", {
//         username,
//         email,
//         password,
//       })
//       .then((response) => {
//         const json = response.data;
//         // save the user to local storage
//         localStorage.setItem("user", JSON.stringify(json));
//         // update the useAuth store
//       })
//       .catch((error) => {
//         setIsloading(false);
//         setError(error.message);
//       });
//   };
// };
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const login = useAuth((state) => state.login);
  const navigate = useNavigate();
  // the request function
  const signup = async (username, email, password) => {
    setIsloading(true), setError(null);
    try {
      const response = await axios.post("http://localhost:3005/user/signup", {
        username: username,
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
      toast.success("Signup successful! Welcome to the platform!");
      navigate("/home");
    } catch (error) {
      // handel errors
      if (error.response) {
        console.error("Error Response:", error.response);
        setError(error.response.data?.error || "An unknown error occurred");
        toast.error(
          error.response?.data?.error || "Signup failed. Please try again."
        );
      } else {
        console.error(
          `Error: ${error.message || "An unknown error occurred2"}`
        );
        setError(`Error: ${error.message || "An unknown error occurred2"}`);
        toast.error(error.message || "Signup failed. Please try again.");
      }
    } finally {
      setIsloading(false);
    }
  };
  return { signup, isloading, error };
};
// setError(
//   error.response?.data?.message || "sign failded ,Please try again"
// );
