import React from "react";

function FormX() {
  return (
    <form action="" className="form-container">
      <div className="header-container">
        <h3>Registration</h3>
      </div>
      <div className="input-container">
        <input type="text" />
        <input type="email" required />
        <input type="password " />
      </div>
      <div className="btn-container2">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormX;
