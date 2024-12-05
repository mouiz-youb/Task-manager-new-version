import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useUser } from "../Store/useUser";
export const useLogout = () => {
  const navigate = useNavigate();
  const logout = useUser((state) => state.logout);
  const Logout = async () => {
    // remove the userdata and the token from the local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    logout();
    // redirect to the home page
    navigate("/");
    // console.log()
  };
  return Logout;
};
