import React from "react";

export default function Title({ text }) {
  return (
    <div
      className="text-3xl text-center bg-no-repeat bg-bottom bg-cover sm:bg-auto sm:bg-right-bottom sm:text-right"
      style={{
        backgroundImage:'url("/bosco/title-bg-bottom.png")',
        height: "60px",
        textTransform: "uppercase",
        marginTop: "0px",
      }}
    >
      <div className="sm:mr-8">{text}</div>
    </div>
  );
}
