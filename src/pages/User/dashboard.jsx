import React from "react";
import Sidebar from "@components/Dashboard/sidebar";
import Main from "@components/Dashboard/Main";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div style={{ height: "100vh", overflowX: "hidden", width: "100%" }}>
      <div className="row custom-gutter w-100">
        <div className="col-2 p-0">
          <Sidebar />
        </div>
        <div className="col-10 p-0 ">
          <Main>
            <Outlet />
          </Main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
