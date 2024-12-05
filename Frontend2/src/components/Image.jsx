import React from "react";
import "../App.css";
function Image(props) {
  return (
    <div className="image-container-for-profile">
      <img src={props.url} alt="" className="profile-image-url" />
    </div>
  );
}
// {props.url}
export default Image;
