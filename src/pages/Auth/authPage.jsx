import React from "react";
import Logo from "@images/logo.png";
import { Outlet, useLocation } from "react-router-dom";
import Carousel from "@components/Auth/carousels";

const AuthPage = () => {
  const location = useLocation();

  return (
    <div className="container-lg" style={{ overflowY: "auto" }}>
      <div
        className="authPageWrapper"
        style={{
          padding: `${location.pathname === "/signup" ? "80px" : "136px"} 0px`,
        }}
        // style={{
        //   paddingTop: location.pathname === "/signup" ? "80px" : "136px",
        // }}
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
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
