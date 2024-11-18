import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
// import { useBearStore } from "../../Zustend-store/AuthStore";
import { useAuth } from "../../Zustend-store/AuthStore.js";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hook/useLogout";
import { useInitializeAuth } from "../hook/useInitializeAuth.js";
import { Link } from "react-router-dom";
function Home() {
  const user = useAuth((state) => state.user);
  const logout = useLogout();
  const navigate = useNavigate();
  useInitializeAuth();
  const handelclick = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="home-container">
      <h1>home</h1>
    </div>
  );
}

export default Home;
{
  /* <button onClick={() => increasePopulation()}>increase </button>
<button onClick={() => descreasePopulation()}>descrease </button>
<button onClick={() => removeAllBears()}>delete all </button> */
}
// const bears = useBearStore((state) => state.bears);
// const increasePopulation = useBearStore((state) => state.increasePopulation);
// const descreasePopulation = useBearStore(
//   (state) => state.descreasePopulation
// );
// const removeAllBears = useBearStore((state) => state.removeAllBears);

// <div className="home-container">
{
  /* <h1 className="header-home">hello form the home page</h1>
<h1>the email user is {user} </h1>
<div className="btn-home">
  <button className="btn-auth">login </button>
  <button className="btn-auth">logout </button>
</div>
<p></p> */
}
{
  /* <p>{user ? `Logged in as ${user.name}` : "Not logged in"}</p> */
}
{
  /* <h2>{user ? `logged in as ${user.name}` : `not logged in `} </h2> */
}
// </div>
