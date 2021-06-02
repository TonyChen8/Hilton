import React from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Service() {
  return (
    <div className="flex p-5 flex-col text-md sm:text-xl sm:flex-row overflow-hidden mx-auto w-full sm:w-10/12 max-w-6xl">
      {/*left*/}
      <div className="flex flex-col flex-1 mb-5 sm:mr-10">
        <img
          className="w-full p-10 sm:p-24 sm:-my-20"
          src="/bosco/service/girl.png"
          alt=""
        />
        <div
          className="p-6 mx-2 mt-3"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <Title text="service"></Title>

          <div className="text-white mt-5">
            <p className="mb-5">
              All our ladies undergo compulsory health checks and only perform
              safe sex practices here at Asian Star.
            </p>
            <p>
              If you would like to fulfill your fantasies or it is a different
              kind of service you desire, please feel free to drop by to have a
              chat with our friendly ladies.
            </p>
          </div>
        </div>
      </div>
      {/*right*/}
      <div className="flex flex-col flex-1">
        <div
          className="p-6 mx-2 mt-3"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <Title text="our price"></Title>
          <div className="text-white mt-5">
            <div className="mb-5">
              Our fees are payable in two parts (prices include GST):
            </div>
            <div>– Room Fee: Payable to Asian Star</div>
            <div>– Service Fee: Payable to our ladies</div>– Eftpos and ATM are
            available
          </div>
        </div>

        <div
          className="p-6 mx-2 mt-3 text-xs sm:text-xl text-white mt-8"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <table border="0" width="100%" cellSpacing="0" cellPadding="5">
            <thead>
              <tr>
                <th className="text-left" width="185" height="54">
                  Duration
                </th>
                <th className="text-left" width="147">
                  Room Hire
                </th>
                <th className="text-left" width="215">
                  Payment
                  <br />
                  to ladies(Approx)
                </th>
                <th className="text-left" width="65">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-b">
                <td
                  className=""
                  style={{ textAlign: "center" }}
                  colSpan="4"
                  height="44"
                >
                  All-day Price (from 9:30am till 2am)
                </td>
              </tr>
              <tr>
                <td>20 minutes</td>
                <td>$50</td>
                <td>$60</td>
                <td>$110</td>
              </tr>
              <tr>
                <td>30 minutes</td>
                <td>$60</td>
                <td>$70</td>
                <td>$130</td>
              </tr>
              <tr>
                <td>45 minutes</td>
                <td>$90</td>
                <td>$100</td>
                <td>$190</td>
              </tr>
              <tr>
                <td>1 Hour</td>
                <td>$110</td>
                <td>$130</td>
                <td>$240</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Service />, document.getElementById("reactjs"));
}
