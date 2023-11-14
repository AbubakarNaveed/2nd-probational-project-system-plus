import React from "react";
import Sidebar from "@components/Dashboard/sidebar";
const Dashboard = () => {
  return (
    <div className="row gap-0">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10 bg-info m-0">Main</div>
    </div>
  );
};

export default Dashboard;
