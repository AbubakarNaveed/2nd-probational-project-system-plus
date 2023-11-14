import React from "react";
import Burger from "@images/burger.svg";
import Button from "@components/Generals/button";
import Logo from "@images/logo.png";
import Plus from "@images/plus.svg";
const sidebar = () => {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        padding: "24px 16px",
        background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        overflowX: "hidden",
      }}
    >
      <div className="contentSection">
        <div
          className="d-flex align-items-center justify-content-center w-100"
          style={{ gap: "16px" }}
        >
          <button
            style={{
              border: "1px #DCDEE6 solid",
              background: "#fff",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            <img src={Burger} style={{ height: "20px", width: "20px" }} />
          </button>
          <img src={Logo} style={{ height: "20px", width: "160px" }} />
        </div>
        <div className="d-flex justify-content-center align-items-center w-100">
          <Button text={"Create Trips"} size="16px" icon={Plus} />
        </div>
      </div>

      <div className="profileSection">ok2</div>
    </div>
  );
};

export default sidebar;
