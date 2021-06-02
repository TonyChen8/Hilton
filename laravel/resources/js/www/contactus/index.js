import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Contactus() {
  return (
    <div className="flex flex-col px-10 text-sm sm:text-xl overflow-hidden mx-auto w-full sm:w-10/12 max-w-6xl">
      <div className="my-10 flex flex-col">
        <img
          className="h-64 w-auto object-cover sm:object-contain"
          src="/bosco/contactus/banner.jpg"
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
              Phone No.: <span className="text-yellow ml-2">0450316989</span>
            </div>
            <div className="mb-5 text-white">
              Our friendly staff are able to help you with any questions. To
              find out who are the ladies working today, please check{" "}
              <a className="text-yellow" href="/whoson">
                "Who's On"
              </a>{" "}
              page. To find out when your favorite ladies will come back to
              Asian Star, please check{" "}
              <a className="text-yellow" href="/Ladies">
                “Our Ladies”
              </a>{" "}
              page.
            </div>
            <div className="mb-3 text-white">Opening hours:</div>
            <div>
              <div>7 days:</div>
              <div>Sunday to Thursday: 9:30am to 2 am.</div>
              <div>Friday and Saturday 9:30am to 3am.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <div
            className="p-6 mt-3"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <Title text="OUR ADDRESS"></Title>

            <div className="mt-16 text-yellow mb-5">
              Address: 26 Magnesium Dr, Crestmead QLD 4132
            </div>
            <div className="text-white">
              We are the front unit of 26 Magnesium Dr. Plenty of parking spaces
              are available at the front of our premises, where Asian Star car
              parking sign is displayed and we also provide discreet parking
              which is located on the left hand side of the driveway where the“
              Asian Star Garage” sign is displayed. Entry door from garage to
              the premises is available.
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
