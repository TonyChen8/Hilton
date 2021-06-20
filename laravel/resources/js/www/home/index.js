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


      <div className="mt-12 p-4">
        <h1 className="text-3xl text-center">
          Welcome to Asian Star! Brisbane’s best Brothel
        </h1>
        <p className="text-center w-1/2 mx-auto max-w-full">
          <strong>
            Welcome to Asian Star! Brisbane’s best Asian Brothel. We have a wide
            range of ladies from China, Korea, Japan, Singapore, Thailand,
            Vietnam and other countries. However, we are not just limited to
            Asian ladies as we do welcome nice ladies from other nationalities.
            Our specialty we provide is our beautiful quality of ladies and the
            good services they offer you.
          </strong>
        </p>
        <h2
          data-fontsize="36"
          data-inline-fontsize="true"
          data-inline-lineheight="true"
          data-lineheight="54"
          className="text-2xl text-center mb-2 mt-3"
        >
          We are open!
        </h2>
        <p className="text-center">
          <b>
            However, there are certain rules to follow based on COVID Safe sex
            industry plan, please follow the rules and keep us all safe：
          </b>
        </p>
        <p className="text-center">
          <b>
            Stay home if you feel unwell, you will be refused to stay if you are
            unwell
          </b>
        </p>
        <p className="text-center">
          <b>Practice Social distancing</b>
        </p>
        <p className="text-center">
          <b>
            Wash hand or using alcohol-based hand sanitizer ( will be provided
            here) upon arrival
          </b>
        </p>
        <p className="text-center">
          <b>
            You will be asked to provide contact details for contact tracing and
            we will keep it confidential and destroy after certain time;
          </b>
        </p>
        <p className="text-center">
          <b>
            Our premises will be limited to 20 people at a time; please try not
            to come in group; you may be asked to wait outside if we reach
            limitation;
          </b>
        </p>
        <p className="text-center">
          <b>
            We will perform more strict hygiene and sanitizing method which may
            cause longer waiting time; please be patient and understandable;
          </b>
        </p>
        <p className="text-center">
          <b>Fri and Sat nights we will closed at 3am instead of 4am</b>
        </p>
        <p className="text-center">
          <b>Stay safe and hope see you again soon!</b>
        </p>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Home />, document.getElementById("reactjs"));
}
