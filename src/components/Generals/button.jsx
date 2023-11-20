import React from "react";

const Button = ({
  icon = "none",
  text,
  fontColor,
  color = "primary",
  type = "",
  fontSize = "18",
  buttonSize = "",
  isDisabled = false,
  clickEvent,
}) => {
  // Determine the button classes based on the props
  const buttonClasses = `btn btn-${type ? `${type}-` : ""}${color} ${
    buttonSize ? `btn-${buttonSize}` : ""
  }`;

  return (
    <button
      type="button"
      className={buttonClasses}
      style={{ width: "100%" }}
      disabled={isDisabled}
      onClick={() => clickEvent()}
    >
      {icon != "none" && (
        <span aria-hidden="true" style={{ marginRight: "8px" }}>
          <img src={icon} style={{ height: "20px", width: "20px" }} />
        </span>
      )}
      <span
        style={{
          fontWeight: 600,
          fontSize: `${fontSize}px`,
          color: fontColor,
          wordBreak: "break-word",
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
