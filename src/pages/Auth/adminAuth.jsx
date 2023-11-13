import React from "react";
import Logo from "@images/logo.png";
import Key1 from "@images/Key.svg";
import Key2 from "@images/Key2.svg";
import { Link } from "react-router-dom";
const adminAuth = () => {
  return (
    <div className="container-lg" style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "90px",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <img
              src={Logo}
              style={{
                width: "147px",
                height: "18px",
              }}
            />
            <div>
              <div className="loginWrapper ">
                <div className="loginHeader flex-column align-items-center ">
                  <h1 style={{ fontSize: "33px" }}> Admin Panel Login </h1>

                  <p style={{ textAlign: "center" }}>
                    Please login in order to proceed.
                  </p>
                </div>
                <div className="loginBody">
                  <form>
                    <div class="form-group input-group-lg ">
                      <label>Email*</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group input-group-lg">
                      <label>Password*</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                  </form>
                  <div className="loginUtility">
                    <div className="remember">
                      <input type="checkbox" />
                      <p>Remember me </p>
                    </div>
                    <div className="forgot">
                      <a>
                        <Link to="/forgotpassword">Forgot Password?</Link>
                      </a>
                    </div>
                  </div>
                  <div className="loginButton">
                    <button className="btn btn-primary" type="button">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <img src={Key1} />
          <img src={Key2} />
        </div>
      </div>
    </div>
  );
};

export default adminAuth;
