import React from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Ladies() {
  return (
    <div className="flex flex-col p-8 text-sm sm:text-xl overflow-hidden mx-auto w-full sm:w-10/12 max-w-6xl">
      <div className="w-full mb-10">
        <Title text="our ladies"></Title>
      </div>
      <div className="flex flex-col sm:flex-row items-start justify-center">
        <img
          className="w-full sm:w-1/3 mb-5 rounded-xl"
          src="/bosco/ladies/girl.png"
          alt=""
          style={{ objectFit: "contain" }}
        />
        <div className="w-full sm:w-1/2 text-white sm:ml-10">
          <p className="mb-5">
            Our gorgeous ladies work because they want to and enjoy what they
            do.
          </p>
          <p className="mb-5">
            Our ladies pride themselves on giving a passionate and memorable
            service.
          </p>
          <p className="mb-5">
            They are self-motivated and goal-oriented and just love to tease and
            love our clients.
          </p>
          <p className="mb-5">
            Our ladies are medically fit so you can enjoy them without any
            worries in mind.
          </p>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Ladies />, document.getElementById("reactjs"));
}
