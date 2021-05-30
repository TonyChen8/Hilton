import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Contactus() {
  return (
    <div className="flex flex-col overflow-hidden" style={{ width: "1200px" }}>
      <div className="my-16 flex flex-col">
        <img
          className="h-64 w-auto object-contain"
          src="/bosco/contactus/banner.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <div
            className="p-6 mr-10 mt-3 text-xl"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <Title text="Booking and Enquiries"></Title>
            <div className="mt-16 mb-5">
              Phone No.: <span className="text-white ml-2">0450316989</span>
            </div>
            <div className="mb-5">
              Our friendly staff are able to help you with any questions. To
              find out who are the ladies working today, please check{" "}
              <a className="text-white" href="/whoson">
                "Who's On"
              </a>{" "}
              page. To find out when your favorite ladies will come back to
              Asian Star, please check{" "}
              <a className="text-white" href="/Ladies">
                “Our Ladies”
              </a>{" "}
              page.
            </div>
            <div className="text-white">
              <div className="mb-3">Opening hours:</div>
              <div>
                <div>7 days:</div>
                <div>Sunday to Thursday: 9:30am to 2 am.</div>
                <div>Friday and Saturday 9:30am to 3am.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div
            className="p-6 mx-2 mt-3 text-xl"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <Title text="OUR ADDRESS"></Title>

            <div className="mt-16 text-white mb-5">
              Address: 26 Magnesium Dr, Crestmead QLD 4132
            </div>
            <p>
              We are the front unit of 26 Magnesium Dr. Plenty of parking spaces
              are available at the front of our premises, where Asian Star car
              parking sign is displayed and we also provide discreet parking
              which is located on the left hand side of the driveway where the“
              Asian Star Garage” sign is displayed. Entry door from garage to
              the premises is available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Contactus />, document.getElementById("reactjs"));
}
