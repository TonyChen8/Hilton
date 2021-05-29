import React from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Whoson() {
  return (
    <div className="flex flex-col overflow-hidden" style={{ width: "1200px" }}>
      <div className="w-full mb-10">
        <Title text="who's on"></Title>
      </div>

    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Whoson />, document.getElementById("reactjs"));
}
