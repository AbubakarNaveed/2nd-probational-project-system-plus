import React from "react";
import Button from "@components/Generals/button";
import Input from "@components/Generals/input";
import SearchIcon from "@images/Search.svg";
import Plus from "@images/plus.svg";
import { companyDataRows, companyTableBodyRows } from "./companyData";
const main = () => {
  return (
    <div className="mainContainer">
      <div className="header" style={{ alignItems: "center" }}>
        <h1>Companies</h1>
        <div className=" d-flex flex-row" style={{ gap: "12px" }}>
          <div style={{ width: "100%", maxWidth: "350px" }}>
            <Input placeHolder="Search here" icon={SearchIcon} />
          </div>
          <div style={{ width: "140px" }}>
            <Button
              text={"Add New"}
              fontColor={"#ffff"}
              fontSize="16"
              color="primary"
              icon={Plus}
            />
          </div>
        </div>
      </div>
      <div className="mainBody">
        <div
          style={{
            border: "1px solid #dcdee6",
            borderRadius: "8px",
            borderBottom: 0,
          }}
        >
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default main;
