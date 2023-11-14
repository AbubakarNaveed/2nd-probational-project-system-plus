import React from "react";
import Logo from "@images/logo.png";
import { Outlet, useLocation } from "react-router-dom";
import Carousel from "@components/Auth/carousels";

const AuthPage = () => {
  const location = useLocation();

  return (
    <div
      className="container-lg"
      style={{
        overflowY: "auto",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className=" h-100 d-flex  flex-column justify-content-center  w-100"
        // style={{
        //   padding: `${location.pathname === "/signup" ? "80px" : "136px"} 0px`,
        // }}
        // style={{
        //   paddingTop: location.pathname === "/signup" ? "80px" : "136px",
        // }}
      >
        <div className="row justify-content-lg-start align-items-center justify-content-center">
          <img
            src={Logo}
            className="col-12"
            style={{
              marginBottom: location.pathname === "/signup" ? "52px" : null,
              width: "147px",
              height: "18px",
            }}
          />
        </div>

        <div className="authCardWrapper row">
          <div
            className={`col-12 col-lg-5 d-flex justify-content-lg-start justify-content-center m-lg-0 ${
              location.pathname === "/signup" ? "" : "mt-5"
            }`}
          >
            <Outlet />
          </div>

          <div className="d-none d-lg-block col-lg-7 ">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
