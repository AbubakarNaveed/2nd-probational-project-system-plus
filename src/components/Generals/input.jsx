import React from "react";

const Input = ({ label, type }) => {
  return (
    <div class="form-group input-group-lg ">
      <label>{label}</label>
      <input
        type={type}
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default Input;
