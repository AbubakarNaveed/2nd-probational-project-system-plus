import React, { useState } from "react";
import Sidebar from "@components/Userspannel/sidebar";
import Main from "@components/Userspannel/Main";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TopBar from "@components/Userspannel/topBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { openOffcanvas, closeOffcanvas } from "../../redux/Slices/statusSlice";

const Pannel = () => {
  const dispatch = useDispatch();
  // const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleCanvasClose = () => dispatch(closeOffcanvas());
  const handleCanvasOpen = () => dispatch(openOffcanvas());
  const sidebarToggle = useSelector((state) => state.status.sidebarToggle);
  const offCanvasShow = useSelector((state) => state.status.offCanvasShow);
  return (
    <div style={{ height: "100vh", overflowX: "hidden", width: "100%" }}>
      <div className="row custom-gutter w-100">
        <div
          className={`col-${sidebarToggle ? "1" : "2"} p-0 d-none d-xl-block `}
          style={{ transition: "0.3s all ease-in-out" }}
        >
          <Sidebar />
        </div>
        <div
          className={`col-xl-${sidebarToggle ? "11" : "10"} p-0 col-12`}
          style={{ transition: "0.3s all ease-in-out" }}
        >
          <div className=" d-xl-none d-block ">
            <TopBar canvasEvent={handleCanvasOpen} />
          </div>
          <Main>
            <Outlet />
          </Main>
        </div>
      </div>

      <Offcanvas
        show={offCanvasShow}
        onHide={handleCanvasClose}
        className=" d-xl-none d-block "
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Sidebar offcanvas={offCanvasShow} />
      </Offcanvas>
    </div>
  );
};

export default Pannel;
