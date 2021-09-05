import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import Title from "../../common/title";
import Staff from "../../models/staff";

function Ladies() {
  const [staffs, setStaffs] = useState(null);
  async function getAllStaffs() {
    let res = await axios.get("/staffs");
    if (res && res.data) {
      setStaffs(
        res.data
          .map((staff) => new Staff(staff))
      );
    } else {
      alert(
        "Cannot fetch ladies' information. Please try to refresh this page."
      );
    }
  }

  useEffect(() => {
    getAllStaffs();
  }, []);
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

      <div className="w-full max-w-6xl">
        {staffs ? (
          staffs.length > 0 ? (
            <div className="flex flex-col sm:flex-row flex-wrap place-content-between">
              {staffs.map((staff, index) => {
                return (
                  <div
                    key={index}
                    className="w-full sm:w-1/3 flex flex-col items-center mb-16"
                  >
                    <div
                      className="relative"
                      style={{
                        background: `url(${staff.getImage(true)})`,
                        height: "240px",
                        width: "240px",
                        margin: "20px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                    >
                      <img
                        style={{
                          width: "250px",
                          height: "260px",
                          top: "-10px",
                          left: "-5px",
                          maxWidth: "unset",
                        }}
                        className="absolute"
                        src="/bosco/whoson/frame.png"
                        alt=""
                      />
                    </div>

                    <p className="text-2xl my-5">{staff.getTitle()}</p>
                    <p className="w-11/12 text-white text-md">
                      {staff.getDescription()}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-2xl mt-10 text-center">No lady working today.</p>
          )
        ) : null}
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Ladies />, document.getElementById("reactjs"));
}
