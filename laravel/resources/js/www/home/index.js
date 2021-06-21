import React from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-row w-full justify-center mt-10 sm:justify-start sm:mb-80">
        <div className="flex flex-col justify-center items-center sm:items-start sm:ml-auto relative px-5 text-white">
          <h1 className="sm:text-5xl">Ph: 07 3803 1000</h1>
          <h1 className="sm:text-2xl">26 Magnesium Dr, Crestmead QLD 4132</h1>
          <img
            className="absolute top-0 right-0 w-full"
            src="/bosco/title-bg-bottom.png"
          />
        </div>
      </div>

      <div className="w-full flex-col flex sm:absolute top-32 -z-10 object-cove mt-20 items-center">
        <img
          className="w-full h-auto max-w-3xl"
          src="/bosco/bg-girl.png"
          title="girl"
          alt="girl"
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="mt-12 p-4" style={{maxWidth: "768px"}}>
          <h1 className="text-3xl text-center">
            Welcome to Angels 26! Brisbane’s best Brothel
          </h1>
          <p className="text-center mx-auto max-w-full">
            <strong>
              Welcome to Angels 26, one of famous brothels with 20 years’ history
              in Brisbane and Logan area. We offer some of the best full-adult
              services available in Logan at very competitive prices. Recently our
              brothel is under new management and certainly, we are always
              respected as a nice and tidy brothel. Come in and forget the world
              outside with our beautiful girls. Let the girls make your day or
              night special, as you slip into a haven of pleasure, erotica, and
              relaxation.
            </strong>
          </p>

          <p className="text-center mt-10">
            <b>
              Our sensational ladies from Australia and Asia are here to make
              every fantasy of yours a reality and give you an experience that
              will make you anticipate returning for more.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Home />, document.getElementById("reactjs"));
}