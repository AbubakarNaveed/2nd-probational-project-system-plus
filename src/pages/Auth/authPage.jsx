import React from "react";
import Logo from "@images/logo.png";
import { Outlet, useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();

  return (
    <div className="container-lg">
      <div
        className="authPageWrapper row"
        style={{
          padding: `${
            location.pathname === "/signup" ? "110px" : "136px"
          } 50px`,
        }}
      >
        <img
          src={Logo}
          style={{
            marginBottom: location.pathname === "/signup" ? "52px" : null,
            width: "147px",
            height: "18px",
          }}
        />
        <div className="authCardWrapper row">
          <div className="col-5">
            <Outlet />
          </div>

          <div className="col-7">
            <div style={{}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
