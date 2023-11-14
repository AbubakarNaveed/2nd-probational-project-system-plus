import React from "react";
import Sidebar from "@components/Dashboard/sidebar";
const Dashboard = () => {
  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <div className="row custom-gutter">
        <div className="col-2 p-0">
          <Sidebar />
        </div>
        <div className="col-10 bg-info">Main</div>
      </div>
    </div>
  );
};

export default Dashboard;
