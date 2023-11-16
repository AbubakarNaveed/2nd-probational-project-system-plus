import React from "react";
import Input from "@components/Generals/input";
import Button from "@components/Generals/button";
const password = () => {
  return (
    <div class="mainBody">
      <div className="cardWithHeading">
        <h1>Password</h1>
        <div className="cardInput row custom-gutter">
          <div className="formSection col-10 p-0">
            <form>
              <Input type={"text"} label={"Full Name *"} labelSize="md" />
              <Input
                type={"password"}
                label={"Current Password *"}
                labelSize="md"
              />
              <Input
                type={"password"}
                label={"New Password *"}
                labelSize="md"
              />
              <div style={{ width: "100", maxWidth: "180px" }}>
                <Button
                  text={"Change Password"}
                  buttonSize="sm"
                  fontSize="14"
                  fontColor={"#ffff"}
                  isDisabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default password;
