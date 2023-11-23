import React, { useEffect } from "react";
import Button from "@components/Generals/button";
import Input from "@components/Generals/input";
import SearchIcon from "@images/Search.svg";
import Plus from "@images/plus.svg";
import Email from "@images/email.svg";
import Phone from "@images/phone.svg";
import { companyDataRows, companyTableBodyRows } from "./companyData";
import Delete from "@images/delete.svg";
import Edit from "@images/edit.svg";
import View from "@images/view.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeOffcanvas,
  openViewCompany,
  closeViewCompany,
} from "../../../../redux/Slices/statusSlice";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffCanvasHeader from "./offcanvasComponents/Header";
import OffCanvasBody from "./offcanvasComponents/Body";

const main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewCompany = useSelector((state) => state.status.viewCompany);

  const handleAddnew = () => {
    navigate("/user-pannel/companies/add_new", { replace: true });
  };
  const handleOpenCompanyView = () => dispatch(openViewCompany());
  const handleCloseViewCompany = () => dispatch(closeViewCompany());
  useEffect(() => {
    dispatch(closeOffcanvas());
  }, []);

  return (
    <div className="mainContainer">
      <div className="header" style={{ alignItems: "center" }}>
        <h1 className=" d-none d-md-block ">Companies</h1>

        <div className="companyInputSection">
          <h1 className="mobileHeading">Companies</h1>
          <div className="inputContainer">
            <Input placeHolder="Search here" icon={SearchIcon} />
          </div>
          <div style={{ width: "140px" }}>
            <Button
              text={"Add New"}
              fontColor={"#ffff"}
              fontSize="16"
              color="primary"
              icon={Plus}
              clickEvent={handleAddnew}
              responsive={true}
            />
          </div>
        </div>

        <div className="inputContainerMobile">
          <Input placeHolder="Search here" icon={SearchIcon} />
        </div>
      </div>
      <div className="mainBody mainBodyTable">
        <div className="tableBody">
          <table className="table">
            <thead>
              <tr>
                {companyDataRows.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {companyTableBodyRows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <div
                      style={{
                        height: "50px",
                        padding: 0,
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <img src={row["companyName"].avatar} />
                      <p
                        style={{ margin: 0, fontWeight: 400, fontSize: "14px" }}
                      >
                        {row["companyName"].name}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        padding: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <img src={Email} />
                        <p
                          style={{
                            margin: 0,
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          {row["contact"].email}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <img src={Phone} />
                        <p
                          style={{
                            margin: 0,
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          {row["contact"].phone}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        padding: 0,
                        display: "flex",
                        height: "50px",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontWeight: 400,
                          fontSize: "14px",
                        }}
                      >
                        {row["tax"]}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        padding: 0,
                        display: "flex",
                        height: "50px",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <button
                        style={{ background: "none", border: 0 }}
                        onClick={() =>
                          navigate("/user-pannel/companies/edit", {
                            replace: true,
                          })
                        }
                      >
                        <img src={Edit} />
                      </button>
                      <button style={{ background: "none", border: 0 }}>
                        <img src={Delete} />
                      </button>
                      <button
                        style={{ background: "none", border: 0 }}
                        onClick={() => handleOpenCompanyView()}
                      >
                        <img src={View} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Offcanvas
        show={viewCompany}
        className={"offcanvas-width"}
        style={{ padding: "20px 24px" }}
        onHide={handleCloseViewCompany}
        placement="end"
      >
        <Offcanvas.Header
          style={{ borderBottom: "1px solid #dcdee6", padding: 0 }}
          closeButton
        >
          <OffCanvasHeader />
        </Offcanvas.Header>
        <OffCanvasBody />
      </Offcanvas>
    </div>
  );
};

export default main;
