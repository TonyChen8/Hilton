import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Contactus() {
  return (
    <div className="flex flex-col px-10 text-sm sm:text-xl overflow-hidden mx-auto w-full sm:w-10/12 max-w-6xl">
      <div className="my-10 flex flex-col">
        <img
          className="h-64 w-auto object-cover sm:object-contain"
          src="/bosco/contactus/banner.png"
          alt=""
        />
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-1/2">
          <div
            className="p-6 sm:mr-10 mt-3 mb-5"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <Title text="Booking and Enquiries"></Title>
            <div className="mt-16 mb-5 text-white">
              Phone No.: <span className="text-yellow ml-2">07 3803 1000</span>
            </div>

            <div className="mb-3 text-white">Opening hours:</div>
            <div>
              <div>7 days:</div>
              <div>Monday to Thursday: 10:00am to 1:00am.</div>
              <div>Friday to Sunday: 10:00am to 2:00am.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <div
            className="p-6 mt-3"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <Title text="OUR ADDRESS"></Title>

            <div className="mt-16 mb-5 text-white">
              <span>Address:</span>{" "}
              <span className="text-yellow">
                26 Magnesium Drive, Crestmead QLD 4132
              </span>
            </div>
            <div className="text-white">
              Plenty of private parking spaces available for clients.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Contactus />, document.getElementById("reactjs"));
}
