import React from "react";
import Modal from "react-bootstrap/Modal";

import Warning from "@images/warning.svg";
import Button from "@components/Generals/button";
const CompanyModal = ({ modalShow, modalClose }) => {
  return (
    <Modal show={modalShow} centered onHide={modalClose}>
      <Modal.Header style={{ border: 0, paddingTop: 0, paddingBottom: 0 }}>
        <Modal.Title>
          <div style={{ display: "flex", gap: "12px", padding: "24px 0" }}>
            <img src={Warning} />
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
                wordBreak: "break-word",
              }}
            >
              Delete Company
            </p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          paddingLeft: "20px",
          paddingTop: 0,
          paddingBottom: 0,
          marginBottom: "24px",
        }}
      >
        <p
          style={{
            margin: "0px",
            color: "#6B6F80",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          Are you sure you want to delete this company from your list?
        </p>
      </Modal.Body>
      <Modal.Footer style={{ border: 0, padding: "16px" }}>
        <button className="customUpload" onClick={() => modalClose()}>
          Cancel
        </button>
        <div style={{ maxWidth: "80px" }}>
          <Button
            color={"primary"}
            fontSize="14"
            text={"Delete"}
            buttonSize="sm"
            clickEvent={modalClose}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CompanyModal;
