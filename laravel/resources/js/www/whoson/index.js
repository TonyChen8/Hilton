import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import Title from "../../common/title";
import Staff from "../../models/staff";

function Whoson() {
  const [staffs, setStaffs] = useState(null);
  const [schedules, setSchedules] = useState([]);

  async function getAllStaffs() {
    let res = await axios.get("/staffs");
    if (res && res.data) {
      setStaffs(
        res.data
          .map((staff) => new Staff(staff))
          .filter((staff) => staff.isWorkingToday())
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
    <div className="flex flex-col overflow-hidden mx-auto w-full sm:w-10/12 max-w-6xl">
      <div className="flex flex-col p-10 items-center w-full mb-10">
        <div className="w-full mb-10">
          <Title text="who's on"></Title>
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
                      <div className="relative">
                        <img
                          style={{width: "240px", height: "480px"}}
                          className="p-3"
                          src={staff.getImage(true)}
                          alt=""
                        />
                        <img
                          style={{width: "240px", height: "480px"}}
                          className="absolute top-0 left-0"
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
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Whoson />, document.getElementById("reactjs"));
}
