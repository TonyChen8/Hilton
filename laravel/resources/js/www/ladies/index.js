import React from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Ladies() {
  return (
    <div className="flex flex-col p-8 text-sm sm:text-xl overflow-hidden mx-auto w-full sm:w-10/12 max-w-6xl">
      <div className="w-full mb-10">
        <Title text="our ladies"></Title>
      </div>
      <div className="flex flex-col sm:flex-row items-start">
        <img
          className="w-full sm:w-1/2 mb-5 rounded-xl"
          src="/bosco/ladies/girl.jpg"
          alt=""
          style={{ objectFit: "contain" }}
        />
        <div className="w-full sm:w-1/2 text-white sm:ml-10">
          <div className="mb-5">
            Asian Star is one of the best brothels in Brisbane. We are famous of
            having a variety of most beautiful ladies from different countries.
          </div>
          <div className="mb-5">
            Queensland law requires a limit number of ladies to work per shift.
            We usually have 6-8 ladies working every day. As we change our
            ladies very often, please check “who is on ” page to find out which
            ladies working today.
          </div>
          <div className="mb-5">
            This page are the popular ladies who will be working at Asian Star
            soon!
          </div>

          <div className="mb-5 flex flex-row">
            More information please visit
            <a href="https://twitter.com/" className="ml-3">
              <img
                loading="lazy"
                class="alignnone size-full wp-image-26"
                src="/bosco/icontwitter.png"
                alt=""
                width="25"
                height="auto"
              />
            </a>
          </div>
          <div>
            Note: To protect our ladie’s privacy, images of them are not real
            but similar ones unless specified
          </div>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Ladies />, document.getElementById("reactjs"));
}
