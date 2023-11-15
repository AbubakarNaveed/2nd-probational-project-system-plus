import React from "react";

const index = () => {
  return (
    <div style={{ background: "#fff", width: "100%" }}>
      <p>This is account settings</p>
      <Outlet />
    </div>
  );
};

export default index;
