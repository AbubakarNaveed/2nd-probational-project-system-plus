import React from "react";
import { Link } from "react-router-dom";
import Input from "@components/Generals/input";
const Login = () => {
  return (
    <div className="loginWrapper row h-100 align-items-center w-100 justify-content-center ">
      <div className="loginHeader col-12 ">
        <h1>Hi, Nice to Meet You! 👋</h1>

        <p>Please login in order to proceed with you account. </p>
      </div>
      <div className="loginBody col-12">
        <form>
          {/* <div class="form-group input-group-lg ">
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
          </div> */}
          <Input label={"Email *"} type={"email"} />
          <Input label={"Password *"} type={"password"} />
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
          <button class="btn btn-primary" type="button">
            Login
          </button>
        </div>
        <div className="loginUtility2">
          <p>Don't have any?</p>
          <a>
            <Link to="/signup">Create a free account</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
