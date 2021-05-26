import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from "redux";
import Reducer from "./reducer";

import List from "./list";
import Details from "./details";

const store = createStore(Reducer);

function Staffs() {
  return (
    <Provider store={store}>
      <div className="flex flex-row h-full overflow-hidden">
        <List></List>
        <Details></Details>
      </div>
    </Provider>
  );
}

export default Staffs;

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Staffs />, document.getElementById("reactjs"));
}
