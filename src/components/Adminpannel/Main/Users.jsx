import React from "react";
import Input from "@components/Generals/input";
import Button from "@components/Generals/button";
import SearchIcon from "@images/Search.svg";
import Plus from "@images/plus.svg";
import Email from "@images/email.svg";
import Phone from "@images/phone.svg";
import Delete from "@images/delete.svg";
import Edit from "@images/edit.svg";
import View from "@images/view.svg";
import Filter from "@images/filter.svg";
import { UsersDataRows, UsersTableBodyRows } from "./tableDummyData";
const Users = () => {
  return (
    <div className="mainContainer">
      <div className="header" style={{ alignItems: "center" }}>
        <h1 className=" d-none d-md-block ">Users</h1>

        <div className="companyInputSection">
          <h1 className="mobileHeading">Users</h1>
          <div className="inputContainer">
            <Input placeHolder="Search here" icon={SearchIcon} />
          </div>
          <div style={{ width: "140px" }}>
            <button className="customUpload">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <p style={{ margin: 0 }}>Filter</p>
                <img src={Filter} />
              </div>
            </button>
          </div>
        </div>

        <div className="inputContainerMobile">
          <Input placeHolder="Search here" icon={SearchIcon} />
        </div>
      </div>
      <div className="mainBody mainBodyTable">
        <div className="tableBody" style={{ borderRadius: "8px" }}>
          <table className="table rounded table-hover ">
            <thead>
              <tr>
                {UsersDataRows.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {UsersTableBodyRows.map((row, index) => (
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
                      <img src={row["userName"].avatar} />
                      <p
                        style={{ margin: 0, fontWeight: 400, fontSize: "14px" }}
                      >
                        {row["userName"].name}
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
                        {row["createdAt"]}
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
                      {row["status"] ? (
                        <span
                          class="badge bg-success d-flex align-items-center border-1 border-success "
                          style={{ padding: "4px 10px", borderRadius: "40px" }}
                        >
                          <p style={{ margin: 0, color: "#008042" }}>Active</p>
                        </span>
                      ) : (
                        <span
                          class="badge bg-warning d-flex align-items-center border-1 border-success "
                          style={{ padding: "4px 10px", borderRadius: "40px" }}
                        >
                          <p style={{ margin: 0, color: "#EF4444" }}>
                            Inactive
                          </p>
                        </span>
                      )}
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
                      <button className="customUpload">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <p style={{ margin: 0 }}>Login As User</p>
                        </div>
                      </button>
                      <button className="customUpload">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <p style={{ margin: 0 }}>Revoke Address</p>
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagnation">
          <button className="customUpload pagnationEndBtn">
            <p style={{ margin: 0, color: "#6B6F80" }}>Previous</p>
          </button>
          <button className="customUpload pagnationCenterBtn">
            <p style={{ margin: 0, color: "#BF3947" }}>1</p>
          </button>
          <button className="customUpload pagnationEndBtn">
            <p style={{ margin: 0 }}>Next</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
