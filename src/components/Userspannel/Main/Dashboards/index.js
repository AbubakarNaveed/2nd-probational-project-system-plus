import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeOffcanvas } from "../../../../redux/Slices/statusSlice";
const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeOffcanvas());
  }, []);
  return (
    <div className="mainContainer">
      <div className="header">Companies</div>
    </div>
  );
};

export default index;
