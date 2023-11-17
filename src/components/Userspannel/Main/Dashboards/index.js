import React from "react";
import { useLocation } from "react-router-dom";
const index = () => {
  const location = useLocation();
  return (
    <div className="mainContainer">
      <div className="header">Companies</div>
    </div>
  );
};

export default index;
