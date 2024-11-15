import { useAuth } from "../../Zustend-store/AuthStore";
export const useLogout = () => {
  const logout = useAuth((state) => state.logout);
  const Logout = () => {
    // remove the userdata and the token from the local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    logout();
  };
  return Logout;
};
