import React from "react";

const Login = () => {
  return (
    <div className="loginWrapper row">
      <div className="loginHeader col-12 ">
        <div className="loginHeading">
          <h1>Welcome to Pathsync</h1>
          <h1>👋</h1>
        </div>
        <div className="loginMain">
          <p>Please login in order to proceed with you account.</p>
        </div>
      </div>
      <div className="loginBody col-12">
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
            <a>Forgot Password?</a>
          </div>
        </div>
        <div className="loginButton">
          <button class="btn btn-primary" type="button">
            Login
          </button>
        </div>
        <div className="loginUtility2">
          <p>Don't have any?</p>
          <a>Create a free account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
