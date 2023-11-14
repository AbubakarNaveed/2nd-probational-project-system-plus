import React from "react";
const Slide = ({ text, heading, ...props }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="imgContainer">
        <img
          src={props.img}
          style={{
            objectFit: "contain",
          }}
        />
        {/* <img
          src={props.img2}
          style={{
            borderRadius: "8px",
            translate: "70px -120px",

            objectFit: "contain",
          }}
        /> */}
      </div>
      <div className="captionContainer">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Slide;
