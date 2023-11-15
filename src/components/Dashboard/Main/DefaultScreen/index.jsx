import React from "react";
import LoudSpeaker from "@images/Loudspeaker.svg";
const index = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <div
        style={{
          marginTop: "192px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "48px 24px" }}>
          <img src={LoudSpeaker} style={{ height: "185px", width: "232px" }} />
        </div>
        <div className="defaultScreenTextContainer">
          <h2>Get Started!</h2>
          <p>
            Create trips and manage your tasks. View them on your dashboard
            along with other some significant stats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
