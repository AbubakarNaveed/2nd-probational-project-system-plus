import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeOffcanvas } from "../../../redux/Slices/statusSlice";
const index = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeOffcanvas());
  }, []);
  return <>{children}</>;
};

export default index;
