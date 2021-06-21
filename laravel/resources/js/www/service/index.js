import React from "react";
import ReactDOM from "react-dom";

import Title from "../../common/title";

function Service() {
  return (
    <div className="flex p-5 flex-col text-md sm:text-xl sm:flex-row overflow-hidden mx-auto w-full sm:w-10/12 max-w-6xl">
      {/*left*/}
      <div className="flex flex-col flex-1 mb-5 sm:mr-10">
        <img
          className="h-72 object-contain p-10  sm:h-auto w-auto"
          src="/bosco/service/girl.png"
          alt=""
          style={{ minHeight: "210px", maxHeight: "510px" }}
        />
        <div
          className="p-6 mx-2 mt-3"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <Title text="service"></Title>

          <div className="text-white mt-5">
            <p className="mb-5">
              Our ladies provide the standard services to client, please be
              advised that you will need to discuss with your chosen companion
              for the available services that they could offer as some may not
              perform certain special requests.
            </p>
            <p>
              All of our ladies are professionals however they are not obliged
              to perform any service that they are not willing to provide. We
              thank you for your understanding in this matter.
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
            <p className="mb-5">
              Our fees are payable in two parts (prices include GST):
            </p>
            <p>– Room Fee: Payable to Asian Star</p>
            <p>– Service Fee: Payable to our ladies</p>
            <p>– Eftpos and ATM are available</p>
          </div>
        </div>

        <div
          className="p-6 mx-2 mt-3 text-xs sm:text-xl text-white mt-8"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <table className="roboto" border="0" width="100%" cellSpacing="0" cellPadding="5">
            <thead>
              <tr>
                <th className="text-left" width="185" height="54">
                  Price
                </th>
                <th className="text-left" width="147">
                  Duration
                </th>
                <th className="text-left" width="215">
                  SP Rate
                </th>
                <th className="text-left" width="65">
                  Room Rate
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
                  One Female SP vs One Male Client
                </td>
              </tr>
              <tr>
                <td>$120</td>
                <td>20 mins</td>
                <td>$60</td>
                <td>$60</td>
              </tr>
              <tr>
                <td>$140</td>
                <td>30 mins</td>
                <td>$75</td>
                <td>$65</td>
              </tr>
              <tr>
                <td>$190</td>
                <td>45 mins</td>
                <td>$100</td>
                <td>$90</td>
              </tr>
              <tr>
                <td>$240</td>
                <td>1 hr</td>
                <td>$140</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>$340</td>
                <td>90 mins</td>
                <td>$210</td>
                <td>$130</td>
              </tr>
              <tr>
                <td>$440</td>
                <td>120 mins</td>
                <td>$280</td>
                <td>$160</td>
              </tr>
              <tr className="border-t border-b">
                <td
                  className=""
                  style={{ textAlign: "center" }}
                  colSpan="4"
                  height="44"
                >
                  Two Female SPs vs One Male Client
                </td>
              </tr>
              <tr>
                <td>$280</td>
                <td>30 mins</td>
                <td>$100 Each</td>
                <td>$80</td>
              </tr>
              <tr>
                <td>$380</td>
                <td>45 mins</td>
                <td>$140 Each</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>$460</td>
                <td>1 hr</td>
                <td>$170 Each</td>
                <td>$120</td>
              </tr>
              <tr className="border-t border-b">
                <td
                  className=""
                  style={{ textAlign: "center" }}
                  colSpan="4"
                  height="44"
                >
                  Three Female SPs vs One Male Client
                </td>
              </tr>
              <tr>
                <td>$380</td>
                <td>30 mins</td>
                <td>$100 Each</td>
                <td>$80</td>
              </tr>
              <tr>
                <td>$480</td>
                <td>45 mins</td>
                <td>$140 Each</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>$560</td>
                <td>1 hr</td>
                <td>$170 Each</td>
                <td>$120</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm">5% Surcharge for EFTPOS</p>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Service />, document.getElementById("reactjs"));
}
