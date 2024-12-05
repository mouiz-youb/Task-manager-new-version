import { useEffect } from "react";
import { useUser } from "../Store/useUser.js";
export const useInitializeAuth = () => {
  const login = useUser((state) => state.login);
  const logout = useUser((state) => state.logout);
  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("userData"));
    const storeToken = JSON.parse(localStorage.getItem("token"));
    if (storeUser && storeToken) {
      login(storeUser, storeToken);
    } else {
      logout();
    }
  }, [login.logout]);
};
