import React from "react";
import Logo from "@images/logoMobileResponsive.png";
import Burger from "@images/burger.svg";
const TopBar = ({ canvasEvent }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "24px 16px",
        backgroundColor: "#fff",
        gap: "16px",
      }}
    >
      <button
        style={{
          border: "1px #DCDEE6 solid",
          background: "#fff",

          padding: "4px",
          borderRadius: "4px",
        }}
        onClick={() => canvasEvent()}
      >
        <img
          src={Burger}
          style={{ height: "20px", width: "20px", marginTop: "-2px" }}
        />
      </button>
      <img src={Logo} />
    </div>
  );
};

export default TopBar;
