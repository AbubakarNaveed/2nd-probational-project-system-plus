import React from "react";
import Sidebar from "@components/Adminpannel/sidebar";
import Main from "@components/Adminpannel/Main";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Pannel = () => {
  const sidebarToggle = useSelector((state) => state.status.sidebarToggle);
  return (
    <div style={{ height: "100vh", overflowX: "hidden", width: "100%" }}>
      <div className="row custom-gutter w-100">
        <div
          className={`col-${sidebarToggle ? "1" : "2"} p-0`}
          style={{ transition: "0.3s all ease-in-out" }}
        >
          <Sidebar />
        </div>
        <div
          className={`col-${sidebarToggle ? "11" : "10"} p-0`}
          style={{ transition: "0.3s all ease-in-out" }}
        >
          <Main>
            <Outlet />
          </Main>
        </div>
      </div>
    </div>
  );
};

export default Pannel;
