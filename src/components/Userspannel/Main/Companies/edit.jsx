import React, { useEffect } from "react";
import Back from "@images/back.svg";
import { useNavigate } from "react-router-dom";
import DefaultAvatar from "@images/defaulAvartar.png";
import Input from "@components/Generals/input";
import Button from "@components/Generals/button";
import SearchIcon from "@images/Search.svg";
import BlackAdd from "@images/addBlack.svg";
import { useDispatch } from "react-redux";
import { closeViewCompany } from "../../../../redux/Slices/statusSlice";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseViewCompany = () => dispatch(closeViewCompany());
  useEffect(() => {
    handleCloseViewCompany();
  }, []);
  const handleEdit = () => {
    navigate("/user-pannel/companies");
  };
  const handleCancel = () => {
    navigate("/user-pannel/companies");
  };
  return (
    <div className="mainContainer">
      <div className="header logoHeader" style={{ alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            style={{ backgroundColor: "transparent", border: 0 }}
            onClick={() => navigate("/user-pannel/companies")}
          >
            <img src={Back} />
          </button>
          <h1 style={{ fontWeight: 600 }}>Edit Company</h1>
        </div>
      </div>
      <div
        className="mainBody m-0 pt-0 mainHeight"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="changeCardSection">
          <div className="changeCard row custom-gutter">
            <div className="labelArea col-md-3 p-0 col-12">
              <h1>Company Details</h1>
              <p>Add company details to be used while creating trip</p>
            </div>
            <div className="inputArea col-md-9 col-12 p-0 row custom-gutter">
              <div
                className=" col-12 p-0"
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <img
                  src={DefaultAvatar}
                  style={{ height: "80px", width: "80px" }}
                />
                <button className="customUpload">Upload Logo</button>
              </div>
              <div className=" col-12 p-0 row custom-gutter">
                <Input
                  label={"Company Name *"}
                  defaultValue={"Company ABC"}
                  type={"text"}
                  labelSize="md"
                  styles={"col-sm-6 p-0 col-12"}
                  fontS
                />
                <Input
                  label={"Tax Registration Number"}
                  type={"text"}
                  styles={"col-sm-6 p-0 ps-sm-2 col-12 ps-0"}
                  labelSize="md"
                />
              </div>
              <div className=" col-12 p-0 row custom-gutter ">
                <Input
                  label={"Email"}
                  type={"email"}
                  labelSize="md"
                  styles={"col-sm-6 p-0 col-12"}
                />
                <Input
                  label={"Phone"}
                  type={"text"}
                  labelSize="md"
                  styles={"col-sm-6 col-12 p-0 ps-sm-2 ps-0 "}
                />
              </div>

              <div className=" col-12 p-0 row custom-gutter">
                <Input
                  type={"text"}
                  label={"Company Name"}
                  labelSize="md"
                  placeHolder="search location"
                  icon={SearchIcon}
                  styles={"col-sm-6 col-12 p-0"}
                />
              </div>
            </div>
          </div>
          <div className="changeCard row custom-gutter">
            <div className="labelArea col-md-3 p-0 col-12">
              <h1>Billing Contact</h1>
              <p>Choose a billing contact to recieve</p>
            </div>
            <div className="inputArea col-md-9 col-12 p-0 row custom-gutter">
              <div className=" col-12 p-0 row custom-gutter">
                <Input
                  label={"Contact Name"}
                  type={"text"}
                  labelSize="md"
                  styles={"col-sm-6 p-0 col-12"}
                />
                <Input
                  label={"Phone Number"}
                  type={"text"}
                  styles={"col-sm-6 p-0 ps-sm-2 col-12 ps-0"}
                  labelSize="md"
                />
              </div>

              <div className=" col-12 p-0 row custom-gutter">
                <Input
                  type={"text"}
                  label={"Billing Address"}
                  labelSize="md"
                  styles={"col-sm-6 p-0 col-12"}
                />
              </div>
              <div className=" col-12 p-0 row custom-gutter">
                <div className="col-md-6 p-0 d-flex align-items-center gap-1 mt-sm-0 mt-3  ">
                  <input type="checkbox" />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      wordBreak: "break-word",
                      margin: 0,
                    }}
                  >
                    Same as company’s address
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="changeCard row custom-gutter">
            <div className="labelArea col-md-3 p-0 col-12">
              <h1>Addresses</h1>
              <p>List down waypoints to be used while creating trip</p>
            </div>
            <div className="inputArea col-md-9 col-12  p-0 row custom-gutter">
              <div
                className=" col-12 p-0"
                style={{
                  display: "flex",
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
                    <img src={BlackAdd} />
                    <p style={{ margin: 0 }}>Add Address</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            gap: "12px",
            paddingBottom: "24px",
            alignItems: "center",
          }}
        >
          <button
            className="customUpload"
            style={{ width: "140px" }}
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <div style={{ width: "140px" }}>
            <Button
              text={"Save Changes"}
              buttonSize="sm"
              fontSize="14"
              fontColor={"#ffff"}
              clickEvent={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
