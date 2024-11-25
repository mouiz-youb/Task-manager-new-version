import React from "react";
import "../App.css";
import Image from "./Image";
function Profile() {
  return (
    <div className="profile-section">
      <div className="profile-image">
        <Image />
      </div>
      <div className="profile-content">
        <h4>John Doe</h4>
        <h4>John@gmail.com</h4>
      </div>
    </div>
  );
}

export default Profile;
