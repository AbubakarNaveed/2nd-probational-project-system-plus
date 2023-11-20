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
  placeHolder = "",
  isDisabled = false,

  styles,
  icon,
}) => {
  return (
    <div className={styles}>
      {label && icon && (
        <label
          style={{
            marginBottom: `${labelMargin}px`,
            fontSize: fontSizes[labelSize],
            fontWeight: 500,
          }}
        >
          {label}
        </label>
      )}
      <div class={`${icon ? "d-flex p-" : "form-group"} input-group-lg `}>
        {label && !icon && (
          <label
            style={{
              marginBottom: `${labelMargin}px`,
              fontSize: fontSizes[labelSize],
              fontWeight: 500,
            }}
          >
            {label}
          </label>
        )}

        {icon ? (
          <span class="input-group-prepend position-absolute ">
            <button
              className="btn border-bottom-0 border-right-0 border-0"
              type="button"
              style={{}}
            >
              <img src={icon} />
            </button>
          </span>
        ) : (
          <></>
        )}

        <input
          type={type}
          value={defaultValue || null}
          class="form-control"
          style={{ paddingLeft: icon ? "50px" : "12px" }}
          disabled={isDisabled}
          placeHolder={placeHolder}
        ></input>
      </div>
    </div>
  );
};

export default Input;
