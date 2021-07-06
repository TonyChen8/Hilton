import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from "redux";
import Reducer from "./reducer";

import List from "./list";
import Details from "./details";

const store = createStore(Reducer);

function Notices() {
  return (
    <Provider store={store}>
      <div className="flex flex-row h-full overflow-hidden">
        <List></List>
        <Details></Details>
      </div>
    </Provider>
  );
}

export default Notices;

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Notices />, document.getElementById("reactjs"));
}
