import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import Staff from "../../models/staff";

import { AiOutlineCheck } from "react-icons/ai";

function Calendar() {
  const [staffs, setStaffs] = useState([]);
  const [schedules, setSchedules] = useState([]);

  async function getAllStaffs() {
    let res = await axios.get("/staffs");
    console.log(
      "/Hilton/laravel/resources/js/admin/schedule/calendar.js:15",
      res
    );
    if (res && res.data) {
      setStaffs(res.data.map((item) => new Staff(item)));
    } else {
      alert("Cannot fetch all staffs information. Try to refresh this page.");
    }
  }

  useEffect(() => {
    getAllStaffs();
  }, []);

  async function selectDay(staff, index) {
    staff.setSchedule(index, !staff.getSchedule(false, index));
    setStaffs([...staffs]);
  }

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  async function saveSchedule(item) {
    if (staffs.length > 0) {
      let res = await axios.post(`/schedule`, {
        schedules: staffs.map((staff) => {
          return {
            id: staff.getId(),
            schedules: days.map((day, index) =>
              staff.getSchedule(false, index)
            ),
          };
        }),
      });
    }
  }

  return (
    <div className="flex flex-col h-full bg-white p-8 min-w-xl w-full rounded-md">
      <table className="table-fixed mb-16">
        <thead>
          <tr>
            <th className="w-1/12"></th>
            {days.map((day, index) => {
              return (
                <th key={index} className="w-1/12">
                  {day}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff, index) => {
            return (
              <tr key={index}>
                <td className="border text-center">{staff.getName()}</td>
                {days.map((day, index) => {
                  return (
                    <td key={index} className="border text-center">
                      <div
                        className="cursor-pointer w-full h-12 flex flex-row items-center justify-center"
                        onClick={(e) => selectDay(staff, index)}
                      >
                        {staff.getSchedule(false, index) && (
                          <AiOutlineCheck></AiOutlineCheck>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex flex-row flex-1 items-center justify-center">
        {staffs.length > 0 ? (
          <div
            className="bg-blue-400 ml-auto text-white rounded text-center cursor-pointer py-1 px-8"
            onClick={saveSchedule}
          >
            Save Schedule
          </div>
        ) : (
          <div className="text-3xl">You have to add a staff first.</div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
