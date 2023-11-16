import React from "react";

const fontSizes = {
  lg: "18px",
  md: "14px",
};

const Input = ({
  label,
  type,
  defaultValue,
  labelMargin = 8,
  labelSize = "lg",
  isDisabled = false,
}) => {
  return (
    <div class="form-group input-group-lg ">
      <label
        style={{
          marginBottom: `${labelMargin}px`,
          fontSize: fontSizes[labelSize],
          fontWeight: 500,
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={defaultValue || null}
        class="form-control"
        disabled={isDisabled}
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default Input;
