import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import Notice from "../../models/notice";

import { BiMessageError } from "react-icons/bi";

function List() {
  const dispatch = useDispatch();
  const selectedNotice = useSelector((state) => state.selectedNotice || new Notice({}));
  const notices = useSelector((state) => state.notices || []);

  async function getAllNotices() {
    let res = await axios.get("/notice/all");
    if (res && res.data) {
      dispatch({ type: "set.notices", data: { notices: res.data } });
    } else {
      alert("Cannot fetch all notices information. Try to refresh this page.");
    }
  }

  useEffect(() => {
    getAllNotices();
  }, []);

  async function addNewNotice() {
    let res = await axios.post("/notice");
    if (res && res.data) {
      dispatch({ type: "set.notices", data: { notices: res.data } });
    } else {
      alert("Cannot fetch all notices information. Try to refresh this page.");
    }
  }

  function onSelectNotice(item) {
    dispatch({ type: "select.notice", data: { notice: item } });
  }

  return (
    <div className="flex flex-col h-full mr-16 bg-white p-4 min-w-xl w-1/4 rounded-md">
      <div className="text-xl mb-6">Notices:</div>

      <div className="mb-6 flex-1 overflow-y-auto">
        {notices.map((notice, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row items-center p-2 m-2 cursor-pointer text-md border-b-2 border-gray-200 ${
                selectedNotice.getId() === notice.getId() ? "bg-blue-200" : ""
              }`}
              onClick={() => onSelectNotice(notice)}
            >
              <BiMessageError className="mr-2"></BiMessageError>
              {notice.getTitle()}
            </div>
          );
        })}
      </div>
      <div
        className="bg-blue-400 text-white rounded text-center cursor-pointer py-1"
        onClick={addNewNotice}
      >
        Add new notice
      </div>
    </div>
  );
}

export default List;
