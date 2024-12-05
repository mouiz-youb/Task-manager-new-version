import React from "react";
import "../App.css";
import Image from "./Image";
import { useUser } from "../Store/useUser.js";
// import defaulImage from "../../public/defaulImage.jpg";
import defaultImage from "../../public/defaultImage.jpg";
function Profile() {
  const user = useUser((state) => state.user);

  // console.log(user.image);
  // Construct the URL from localStorage
  const imageUrl = user?.image
    ? `http://localhost:3006/images/${user.image.split("\\").pop()}`
    : null;
  return (
    <div className="profile-section">
      <div className="profile-image">
        <Image url={defaultImage} />
      </div>
      <div className="profile-content">
        <h4>{user?.username || "Guest User"}</h4>
        <h4>{user?.email || "No email provided"}</h4>
      </div>
    </div>
  );
}

export default Profile;
