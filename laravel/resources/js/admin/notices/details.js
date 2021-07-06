import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastr";

import axios from "axios";
import Notice from "../../models/notice";

function Details() {
  const notice = useSelector((state) => state.selectedNotice || new Notice({}));
  const dispatch = useDispatch();

  const container = useRef();

  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImageName] = useState("");
  const [path, setImagePath] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setKey(notice.getId());
    setTitle(notice.getTitle());
    setDescription(notice.getDescription());
  }, [notice]);

  function onNameChange(text) {
    setName(text);
  }
  function onTitleChange(text) {
    setTitle(text);
  }
  function onImageChange(text) {
    let newImage = new Notice({ image: text });
    setImagePath(newImage.getImage(true));
    setImageName(newImage.getImage());
  }

  function onDescriptionChange(text) {
    setDescription(text);
  }

  async function onSave() {
    try {
      let res = await axios.put(`/notice/${key}`, {
        name,
        title,
        image,
        description,
      });

      if (res && res.status === 200) {
        container.current.success(
          `Successfully saved notice's data.`,
          `success`,
          {
            timeOut: 3000,
          }
        );
        console.log("/laravel/resources/js/admin/notices/details.js:43", res);
        dispatch({ type: "set.notices", data: { notices: res.data } });
      }
    } catch (e) {
      console.log("/laravel/resources/js/admin/notices/details.js:67", e);
      container.current.error(`Save notice's data failed.`, `Failed`, {
        timeOut: 10000,
      });
    }
  }

  async function onDelete() {
    try {
      let res = await axios.delete(`/notice/${key}`);
      if (res && res.status === 200) {
        container.current.success(
          `Successfully deleted notice's data.`,
          `success`,
          {
            timeOut: 3000,
          }
        );
        dispatch({ type: "set.notices", data: { notices: res.data } });
        dispatch({ type: "select.notice", data: { notice: null } });
      }
    } catch (e) {
      console.log("/laravel/resources/js/admin/notices/details.js:83", e);
      container.current.error(`Delete notice's data failed.`, `Failed`, {
        timeOut: 10000,
      });
    }
  }

  return (
    <div className="flex flex-col bg-white p-16 flex-1 rounded-md">
      <div className="flex flex-row mb-12">
        <div className="flex flex-col w-full">
          <div className="flex flex-col mb-4">
            <label className="text-sm ">Title</label>
            <input
              key={key}
              className="border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-transparent border-b-2 border-gray-300"
              type="text"
              onChange={(e) => onTitleChange(e.target.value)}
              defaultValue={title}
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <label className="text-sm">Description</label>
        <textarea
          key={key}
          type="text"
          className="w-full"
          onChange={(e) => onDescriptionChange(e.target.value)}
          defaultValue={description}
        ></textarea>
      </div>

      <div className="flex flex-row">
        <div
          className="text-red-600 rounded text-center cursor-pointer px-16 py-1 border border-red-600"
          onClick={onDelete}
        >
          Delete
        </div>
        <div
          className="bg-blue-400 text-white rounded text-center cursor-pointer ml-auto px-16 py-1"
          onClick={onSave}
        >
          Save
        </div>
      </div>

      <ToastContainer ref={container} className="toast-top-right" />
    </div>
  );
}

export default Details;
