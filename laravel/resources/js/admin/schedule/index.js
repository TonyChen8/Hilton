import React from "react";
import ReactDOM from "react-dom";

function Example() {
  return (
    <div className="max-w-7xl mx-auto flex flex-row">

      <div className="flex flex-col mr-16 bg-white p-4 w-1/5">
      <div>1</div>
      <div>1</div>

      </div>

      <div className="flex flex-col flex-1 bg-white">
<div>2</div>
<div>2</div>
      </div>

    </div>
  );
}

export default Example;

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Example />, document.getElementById("reactjs"));
}
