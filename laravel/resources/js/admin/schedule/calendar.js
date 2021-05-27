import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import Staff from "../../models/staff";

import { AiOutlineCheck } from "react-icons/ai";

function Calendar() {
  const [staffs, setStaffs] = useState([]);

  async function getAllStaffs() {
    let res = await axios.get("/staffs");
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

  function saveSchedule(item) {

  }

  let days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <div className="flex flex-col h-full bg-white p-8 min-w-xl w-full rounded-md">
      <table className="table-fixed mb-16">
        <thead>
          <tr>
            <th class="w-1/12"></th>
            {days.map((day, index) => {
              return <th class="w-1/12">{day}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff, index) => {
            return (
              <tr>
                <td className="border text-center">{staff.getName()}</td>
                {days.map((day, index) => {
                  return (
                    <td className="border text-center">
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

      <div className="flex flex-row ">
        <div
          className="bg-blue-400 ml-auto text-white rounded text-center cursor-pointer py-1 px-8"
          onClick={saveSchedule}
        >
          Save Schedule
        </div>
      </div>
    </div>
  );
}

export default Calendar;
