import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const useLogout = () => {
  const navigate = useNavigate();
  const logout = async () => {
    const navigate = useNavigate();
    // remove the userdata and the token from the local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // redirect to the home page
    navigate("/");
  };
  return { logout };
};
