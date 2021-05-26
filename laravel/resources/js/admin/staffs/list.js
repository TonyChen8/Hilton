import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import Staff from "../../models/staff";

import { AiOutlineUser } from "react-icons/ai";

function List() {
  const [staffs, setStaffs] = useState([]);
  const dispatch = useDispatch();
  const [selectedStaff, setSelected] = useState(new Staff({}));

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

  function onSelectStaff(item) {
    setSelected(item);
    dispatch({ type: "select.staff", data: { staff: item } });
  }

  return (
    <div className="flex flex-col h-full mr-16 bg-white p-4 min-w-xl w-1/4 rounded-md">
      <div className="text-xl mb-6">Staffs:</div>

      <div className="mb-6 flex-1 overflow-y-auto">
        {staffs.map((staff, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row items-center p-2 m-2 cursor-pointer text-md border-b-2 border-gray-200 ${
                selectedStaff.getId() === staff.getId() ? "bg-blue-200" : ""
              }`}
              onClick={() => onSelectStaff(staff)}
            >
              <AiOutlineUser className="mr-2"></AiOutlineUser>
              {staff.getName()}
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
