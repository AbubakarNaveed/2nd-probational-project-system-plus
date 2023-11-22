import React from "react";
import Input from "@components/Generals/input";
import DefaultAvatar from "@images/defaulAvartar.png";
import Button from "@components/Generals/button";

const account = () => {
  return (
    <div class="mainBody">
      <div className="cardWithHeading">
        <h1>Settings</h1>
        <div className="cardInput row custom-gutter">
          <div className="imageUploadSection col-2 p-0">
            <img src={DefaultAvatar} />
            <button className="customUpload">Upload Image</button>
          </div>
          <div className="formSection col-10 p-0">
            <form>
              <Input type={"text"} label={"Full Name *"} labelSize="md" />
              <Input
                type={"text"}
                label={"Email *"}
                defaultValue={"abc@gmail.com"}
                labelSize="md"
                isDisabled={true}
              />
              <Input
                type={"text"}
                label={"Phone Number *"}
                defaultValue={"000-213-2134"}
                labelSize="md"
              />
              <div style={{ width: "100", maxWidth: "180px" }}>
                <Button
                  text={"Save Changes"}
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

export default account;
