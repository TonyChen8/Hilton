import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./calendar";

function Schedule() {
  return (
    <div className="flex flex-row h-full overflow-hidden">
      <Calendar></Calendar>
    </div>
  );
}

export default Schedule;

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Schedule />, document.getElementById("reactjs"));
}
