import React from "react";

const Button = ({ icon = "none", text, color, type, size = "18" }) => {
  // Determine the button classes based on the props
  const buttonClasses = `btn btn-${type || "primary"} btn-${
    color || "primary w-100"
  }`;

  return (
    <button type="button" className={buttonClasses}>
      {icon != "none" && (
        <span
          aria-hidden="true"
          style={{ marginRight: "8px", marginBottom: "2px" }}
        >
          <img src={icon} style={{ height: "20px", width: "20px" }} />
        </span>
      )}
      <span
        style={{
          fontWeight: 600,
          fontSize: `${size}px`,
          wordBreak: "break-word",
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
