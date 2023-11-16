import React from "react";
import { Link } from "react-router-dom";
import Input from "@components/Generals/input";
import Button from "@components/Generals/button";
const ForgotPassword = () => {
  return (
    <div className="signUpWrapper row">
      <div className="signUpHeader col-12">
        <h1>Forgot Password?</h1>
        <p>
          Enter your email and we will provide you a link there to reset your
          password.
        </p>
      </div>
      <div className="signUpBody col-12">
        <form>
          {/* <div class="form-group input-group-lg">
            <label>Email *</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div> */}
          <Input type={"text"} label={"Email *"} />
        </form>
        <div className="loginButton">
          {/* <button class="btn btn-primary" type="button">
            Send Email
          </button> */}
          <Button
            text={"Send Email"}
            fontColor={"#ffff"}
            fontSize="18"
            color="primary"
            buttonSize={"lg"}
          />
        </div>
        <div className="forgotUtility2">
          <a>
            <Link to="/signup">Back to Login</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
