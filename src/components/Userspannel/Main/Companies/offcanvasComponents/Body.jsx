import React from "react";

const Body = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={styles.container}>
        <div
          style={{
            backgroundColor: "#F9FAFC",
            borderRadius: "8px",
            padding: "12px",
          }}
        >
          <p style={styles.label}>Tax Registration Number</p>
          <p style={styles.text}>123-45-8475</p>
        </div>
      </div>
      <div style={styles.container}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p style={{ ...styles.text, fontWeight: 600 }}>Billing Contact</p>
          <div className="row custom-gutter">
            <div className="col-6 p-0">
              <p style={styles.label}>Contact Name </p>
              <p style={styles.text}>Eva James </p>
            </div>
            <div className="col-6 p-0">
              <p style={styles.label}>Phone Number </p>
              <p style={styles.text}>(405) 555-0128</p>
            </div>
          </div>
          <div className="row custom-gutter">
            <div className="col-12 p-0">
              <p style={styles.label}>Billing Address</p>
              <p style={styles.text}>
                Time Out, Hirschengraben 13, 6003, Luzern, CHE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ ...styles.container, border: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p style={{ ...styles.text, fontWeight: 600 }}>Addresses</p>
          <div className="row custom-gutter">
            <div className="col-6 p-0">
              <p style={styles.label}>Office </p>
              <p style={styles.text}>4 Novella Block, Eichmannview</p>
            </div>
            <div className="col-6 p-0">
              <p style={styles.label}>Home </p>
              <p style={styles.text}>
                Time Out, Hirschengraben 13, 6003, Luzern, CHE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  label: {
    color: "#838799",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "17px",
    wordWrap: "break-word",
    margin: 0,
    marginBottom: "4px",
  },
  text: {
    color: "#292B33",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.32px",
    wordWrap: "break-word",
    margin: 0,
  },
  container: { borderBottom: "1px solid #dcdee6", padding: "24px 0" },
};

export default Body;
