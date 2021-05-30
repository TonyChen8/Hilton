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
    <div className="flex flex-col overflow-hidden" style={{ width: "1200px" }}>
      <div className="flex flex-col items-center w-full mb-10">
        <div className="w-full mb-10">
          <Title text="who's on"></Title>
        </div>

        <div className="w-full" style={{ maxWidth: "1024px" }}>
          {staffs ? (
            staffs.length > 0 ? (
              <div className="flex flex-row flex-wrap place-content-between">
                {staffs.map((staff, index) => {
                  return (
                    <div
                      key={index}
                      className="w-1/3 flex flex-col items-center mb-16"
                    >
                      <div className="relative">
                        <img
                          className="w-60 h-72 p-3"
                          src={staff.getImage(true)}
                          alt=""
                        />
                        <img
                          className="absolute top-0 left-0 w-60 h-72"
                          src="/bosco/whoson/frame.png"
                          alt=""
                        />
                      </div>
                      <div className="text-2xl my-5">{staff.getTitle()}</div>
                      <div className="w-11/12 text-white text-md">
                        {staff.getDescription()}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-2xl mt-10">No lady working today.</div>
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
