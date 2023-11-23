import React from "react";
import DefaultAvatar from "@images/defaulAvartar.png";
import Email from "@images/email.svg";
import Phone from "@images/phone.svg";
import Location from "@images/location.svg";
import Edit from "@images/editBlack.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        marginBottom: "24px",
      }}
      className=" flex-wrap flex-sm-nowrap "
    >
      <img src={DefaultAvatar} style={{ width: "100px", height: "100px" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "start",
        }}
      >
        <h1
          style={{
            color: "#292B33",
            fontSize: "23px",
            margin: 0,
            fontWeight: 700,
            lineHeight: "28px",
          }}
        >
          ABC company
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "8px",
          }}
        >
          <div style={logoTextDivStyle}>
            <img src={Phone} />
            <p style={logoTexStyle}>(405) 555-0128</p>
          </div>
          <div style={logoTextDivStyle}>
            <img src={Email} />
            <p style={logoTexStyle}>dustin.wilson@example.com</p>
          </div>
          <div style={logoTextDivStyle}>
            <img src={Location} />
            <p style={logoTexStyle}>
              Time Out, Hirschengraben 13, 6003, Luzern, CHE
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginRight: "12px",
        }}
      >
        <button
          className="customUpload"
          onClick={() =>
            navigate("/user-pannel/companies/edit", {
              replace: true,
            })
          }
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <img src={Edit} />
            <p style={{ margin: 0, fontSize: "14px" }}>Edit</p>
          </div>
        </button>
      </div>
    </div>
  );
};
const logoTextDivStyle = {
  display: "flex",
  alignItems: "center",
  margin: 0,
  gap: "8px",
};
const logoTexStyle = {
  margin: 0,
  fontSize: "14px",

  fontWeight: 400,
  lineHeight: "18px",
};

export default Header;
