import React from "react";
import Button from "@components/Generals/button";
import Input from "@components/Generals/input";
import SearchIcon from "@images/Search.svg";
import Plus from "@images/plus.svg";
const main = () => {
  return (
    <div className="mainContainer">
      <div className="header" style={{ alignItems: "center" }}>
        <h1>Companies</h1>
        <div className=" d-flex flex-row" style={{ gap: "12px" }}>
          <div style={{ width: "100%", maxWidth: "350px" }}>
            <Input placeHolder="Search here" icon={SearchIcon} />
          </div>
          <div style={{ width: "140px" }}>
            <Button
              text={"Add New"}
              fontColor={"#ffff"}
              fontSize="16"
              color="primary"
              icon={Plus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
