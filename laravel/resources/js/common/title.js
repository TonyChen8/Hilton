import React from "react";

export default function Title({ text }) {
  return (
    <div
      className="text-3xl"
      style={{
        background:
          'url("/bosco/title-bg-bottom.png") no-repeat right -20px bottom',
        height: "100px",
        textTransform: "uppercase",
        textAlign: "right",
        marginTop: "0px",
      }}
    >
      {text}
    </div>
  );
}
