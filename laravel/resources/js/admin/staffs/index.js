import React from "react";
import ReactDOM from "react-dom";

import List from "./list";
import Details from "./details";

function Staffs() {
  return (
    <div className="max-w-7xl mx-auto flex flex-row py-12 max-h-full">
      <List></List>
      <Details></Details>
    </div>
  );
}

export default Staffs;

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Staffs />, document.getElementById("reactjs"));
}
