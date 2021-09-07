import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import axios from "axios";
import Title from "../../common/title";
import Staff from "../../models/staff";

function Whoson() {
  const [staffs, setStaffs] = useState(null);
  // const [schedules, setSchedules] = useState([]);

  async function getAllStaffs() {
    let res = await axios.get("/staffs");
    if (res && res.data) {
      setStaffs(res.data.map((staff) => new Staff(staff)));
    } else {
      alert(
        "Cannot fetch ladies' information. Please try to refresh this page."
      );
    }
  }

  useEffect(() => {
    getAllStaffs();
  }, []);

  let days = [
    moment().startOf('week').add(1, "days"),
    moment().startOf('week').add(2, "days"),
    moment().startOf('week').add(3, "days"),
    moment().startOf('week').add(4, "days"),
    moment().startOf('week').add(5, "days"),
    moment().startOf('week').add(6, "days"),
    moment().startOf('week').add(7, "days"),
  ];

  let dayShift = [];
  let nightShift = [];

  if (staffs && staffs.length) {
    //prepare data for every column
    for (let i = 0; i < days.length; i++) {
      dayShift[i] = [];
      nightShift[i] = [];
      for (let m = 0; m < staffs.length; m++) {
        staffs[m].isDayShift(days[i]) && dayShift[i].push(staffs[m].getTitle());

        staffs[m].isNightShift(days[i]) &&
          nightShift[i].push(staffs[m].getTitle());
      }
    }
  }

  return (
    <div className="flex flex-col overflow-hidden mx-auto w-full sm:w-10/12 max-w-6xl">
      <div className="flex flex-col p-10 items-center w-full mb-10">
        <div className="w-full mb-10">
          <Title text="Roster"></Title>
        </div>

        <table className="w-full max-w-5xl text-white text-xl roboto hidden sm:table">
          <thead>
            <tr>
              <td className="border"></td>
              {days.map((day, index) => {
                return (
                  <td key={index} className="border text-center">
                    {day.format("ddd")}
                    <br />
                    {day.format("D/M")}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border text-center">
                Day
                <br />
                (10AM - 6PM)
              </td>
              {days.map((day, index) => {
                return (
                  <td key={index} className="border text-center">
                    {dayShift.length > 0 &&
                      dayShift[index].map((column, index) => {
                        return (
                          <div key={index} className="py-2">
                            {column}
                          </div>
                        );
                      })}
                  </td>
                );
              })}
            </tr>

            <tr>
              <td className="border text-center">
                Night
                <br />
                (6PM - Late)
              </td>
              {days.map((day, index) => {
                return (
                  <td key={index} className="border text-center">
                    {nightShift.length > 0 &&
                      nightShift[index].map((column, index) => {
                        return (
                          <div key={index} className="py-2">
                            {column}
                          </div>
                        );
                      })}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>

        <div className="w-full max-w-5xl text-white roboto flex flex-col text-xl sm:hidden">
          {staffs && staffs.length > 0
            ? days.map((day, index) => {
                return (
                  <table key={index} className="mb-10">
                    <thead>
                      <tr>
                        <td className="border"></td>
                        <td className="border text-center">
                          {day.format("ddd")}
                          <br />
                          {day.format("D/M")}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border text-center">
                          Day
                          <br />
                          (10AM - 6PM)
                        </td>
                        <td className="border text-center">
                          {dayShift[index].map((column, index) => {
                            return (
                              <div key={index} className="py-2">
                                {column}
                              </div>
                            );
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td className="border text-center">
                          Night
                          <br />
                          (6PM - Late)
                        </td>
                        <td className="border text-center">
                          {nightShift[index].map((column, index) => {
                            return (
                              <div key={index} className="py-2">
                                {column}
                              </div>
                            );
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              })
            : null}

          {/*          {staffs && staffs.length > 0
            ? days.map((day, index) => {
                return (
                  <div key={index} className="flex flex-col flex-auto">
                    <div className="border text-center">
                      {day.format("ddd D/M")}
                    </div>
                    <div className="border flex flex-col text-center">
                      {staffs.map((staff, index) => {
                        let names = staff.isWorkingToday(day);

                        return staff.isWorkingToday(day) ? (
                          <p>{staff.getTitle()}</p>
                        ) : (
                          <p>&nbsp;</p>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : null}*/}

          {/*          {staffs && staffs.length > 0 ? (
            <table
              className="w-full roboto text-white border text-xl"
              border="0"
            >
              <thead>
                <tr>
                  {days.map((day, index) => {
                    return (
                      <th key={index} className="border">
                        {day.format("ddd D/M")}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {staffs.map((staff, index) => {
                  return (
                    <tr>
                      {days.map((day, index) => {
                        return (
                          <td>
                            {staff.isWorkingToday(day)
                              ? staff.getTitle()
                              : null}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : null}*/}

          {/*          {staffs ? (
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
                          style={{width: "240px", height: "480px", padding: "24px 12px"}}
                          src={staff.getImage(true)}
                          alt=""
                        />
                        <img
                          style={{width: "240px", height: "464px", top: "8px"}}
                          className="absolute left-0"
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
          ) : null}*/}
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Whoson />, document.getElementById("reactjs"));
}
