import React from "react";
import { useLocation } from "react-router-dom";
const index = () => {
  const location = useLocation();
  return (
    <div>
      <h1>This page is not contructed yet {location}</h1>
    </div>
  );
};

export default index;
