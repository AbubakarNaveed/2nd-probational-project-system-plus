import React from "react";
import Arrow from "@images/arrowUp.svg";
const Dashboard = () => {
  return (
    <div className="mainContainer" style={{ backgroundColor: "#F9FAFC" }}>
      <div className="header" style={{ backgroundColor: "#ffff" }}>
        <h1>Dashboard</h1>
      </div>
      <div className="adminDashboardWelcomeText">
        <h1>Hi, welcome back! 👋 </h1>
        <p>Here’s what is happening </p>
      </div>
      <div className="adminMainBodyContainer">
        <div className="adminMainBodyCardContainer">
          <div className="row custom-gutter">
            <div className="col-12 col-md-6 p-0">
              <div className="adminCard" style={{ borderTopLeftRadius: "8px" }}>
                <div style={{ paddingLeft: "112px", minHeight: "110px" }}>
                  <p className="name">New Users</p>
                  <div className="content">
                    <h1>1251</h1>
                    <span class="badge bg-success d-flex align-items-center ">
                      36% <img src={Arrow} />
                    </span>
                  </div>
                  <p className="time">Last 30 Days </p>
                </div>
              </div>
              <div
                className="adminCard"
                style={{ borderBottomLeftRadius: "8px" }}
              >
                <div style={{ paddingLeft: "112px", minHeight: "110px" }}>
                  <p className="name">Revoked Users</p>
                  <div className="content">
                    <h1>1251</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6  p-0">
              <div
                className="adminCard"
                style={{ borderTopRightRadius: "8px" }}
              >
                <div style={{ paddingLeft: "112px", minHeight: "110px" }}>
                  <p className="name">Total Users</p>
                  <div className="content">
                    <h1>5621</h1>
                  </div>
                </div>
              </div>
              <div
                className="adminCard"
                style={{ borderBottomRightRadius: "8px" }}
              >
                <div style={{ paddingLeft: "112px", minHeight: "110px" }}>
                  <p className="name">Active Users</p>
                  <div className="content">
                    <h1>5621</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
