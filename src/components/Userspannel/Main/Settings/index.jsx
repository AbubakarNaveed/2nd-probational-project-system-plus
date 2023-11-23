import React, { useEffect } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeOffcanvas } from "../../../../redux/Slices/statusSlice";
const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeOffcanvas());
  }, []);

  return (
    <div className="mainContainer">
      <div className="headerWithNavs">
        <h1>Settings</h1>
        <div>
          <NavLink
            to={"account"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "navLinkActive" : ""
            }
          >
            Account
          </NavLink>

          <NavLink
            to={"password"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "navLinkActive" : ""
            }
          >
            Password
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default index;
