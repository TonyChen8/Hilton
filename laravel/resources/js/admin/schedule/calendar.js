import React, { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastr";

import axios from "axios";
import Staff from "../../models/staff";

import { AiOutlineCheck } from "react-icons/ai";

function Calendar() {
  const [staffs, setStaffs] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const container = useRef();

  async function getAllStaffs() {
    try {
      let res = await axios.get("/staffs");
      console.log(
        "/Hilton/laravel/resources/js/admin/schedule/calendar.js:15",
        res
      );
      if (res && res.data) {
        setStaffs(res.data.map((item) => new Staff(item)));
      }
    } catch (e) {
      console.log("/laravel/resources/js/admin/schedule/calendar.js:21", e);
      container.current.error(
        `Cannot fetch all staffs information.`,
        `Please refresh this page.`,
        {
          timeOut: 10000,
        }
      );
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
    try {
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
        container.current.success(
          `Successfully saved staffs' schedules.`,
          `Success`,
          {
            timeOut: 3000,
          }
        );
      }
    } catch (e) {
      console.log("/laravel/resources/js/admin/schedule/calendar.js:62", e);
       container.current.error(
        `Cannot save all staffs' schedules.`,
        `Please refresh this page.`,
        {
          timeOut: 10000,
        }
      );
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

      <ToastContainer ref={container} className="toast-top-right" />
    </div>
  );
}

export default Calendar;
