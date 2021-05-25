import React, { useState, useEffect } from "react";
import axios from "axios";
import Staff from "../models/staff";

import { AiOutlineUser } from "react-icons/ai";

function List() {
  const [staffs, setStaffs] = useState([]);

  async function getAllStaffs() {
    let res = await axios.get("/staffs");
    console.log("/laravel/resources/js/admin/staffs/list.js:10", res);
    if (res && res.data) {
      setStaffs(res.data.map((item) => new Staff(item)));
    } else {
      alert("Cannot fetch all staffs information. Try to refresh this page.");
    }
  }

  useEffect(() => {
    getAllStaffs();
  }, []);

  async function addNewStaff() {
    let res = await axios.post("/staff");
    console.log("/laravel/resources/js/admin/staffs/list.js:7", res);
    if (res && res.data) {
      setStaffs(res.data.map((item) => new Staff(item)));
    } else {
      alert("Cannot fetch all staffs information. Try to refresh this page.");
    }
  }

  return (
    <div className="flex flex-col mr-16 bg-white p-4 w-1/5 rounded-md">
      <div className="text-xl mb-6">Staffs:</div>

      <div className="mb-6 overflow-y ">
        {staffs.map((staff, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center p-2 m-2 cursor-pointer text-md"
            >
              <AiOutlineUser className="mr-2"></AiOutlineUser>
              {staff.getTitle()}
            </div>
          );
        })}
      </div>
      <div
        className="bg-blue-400 text-white rounded text-center cursor-pointer py-1"
        onClick={addNewStaff}
      >
        Add new staff
      </div>
    </div>
  );
}

export default List;
