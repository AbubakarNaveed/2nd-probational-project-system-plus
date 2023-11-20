import React from "react";
import Back from "@images/back.svg";
import { useNavigate } from "react-router-dom";
import DefaultAvatar from "@images/defaulAvartar.png";
import Input from "@components/Generals/input";
import SearchIcon from "@images/Search.svg";
const AddNew = () => {
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <div className="header" style={{ alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            style={{ backgroundColor: "transparent", border: 0 }}
            onClick={() => navigate("/user-panel/companies")}
          >
            <img src={Back} />
          </button>
          <h1 style={{ fontWeight: 600 }}>Add New</h1>
        </div>
      </div>
      <div className="mainBody">
        <div className="changeCardSection">
          <div className="changeCard">
            <div className="labelArea">
              <h1>Company Details</h1>
              <p>Add company details to be used while creating trip</p>
            </div>
            <div className="inputArea">
              <div>
                <img src={DefaultAvatar} />
                <button className="customUpload">Upload Logo</button>
              </div>
              <div>
                <Input label={"Company Name *"} type={"text"} labelSize="md" />
                <Input
                  label={"Tax Registration Number"}
                  type={"text"}
                  labelSize="md"
                />
              </div>
              <div>
                <Input label={"Email"} type={"email"} labelSize="md" />
                <Input label={"Phone"} type={"text"} labelSize="md" />
              </div>
              <div>
                <div>
                  <Input
                    type={"text"}
                    label={"Company Name"}
                    labelSize="md"
                    placeHolder="search location"
                    icon={SearchIcon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
