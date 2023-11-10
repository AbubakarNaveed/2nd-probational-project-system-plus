import React from "react";
import Logo from "@images/logo.png";
import { Outlet } from "react-router-dom";
const AuthPage = () => {
  return (
    <div className="container-fluid">
      <div className="authPageWrapper">
        <img src={Logo} />
        <div className="authCardWrapper row">
          <div className=" col-5 ">
            <Outlet />
          </div>

          <div className="col-7"> slider</div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
