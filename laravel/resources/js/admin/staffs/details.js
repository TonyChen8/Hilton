import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastr";

import axios from "axios";
import Staff from "../../models/staff";

function Details() {
  const staff = useSelector((state) => state.selectedStaff || new Staff({}));
  const dispatch = useDispatch();

  const container = useRef();

  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImageName] = useState("");
  const [path, setImagePath] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setKey(staff.getId());
    setName(staff.getName());
    setTitle(staff.getTitle());
    setImageName(staff.getImage());
    setImagePath(staff.getImage(true));
    setDescription(staff.getDescription());
  }, [staff]);

  function onNameChange(text) {
    setName(text);
  }
  function onTitleChange(text) {
    setTitle(text);
  }
  function onImageChange(text) {
    let newImage = new Staff({ image: text });
    setImagePath(newImage.getImage(true));
    setImageName(newImage.getImage());
  }

  function onDescriptionChange(text) {
    setDescription(text);
  }

  async function onSave() {
    try {
      let res = await axios.put(`/staff/${key}`, {
        name,
        title,
        image,
        description,
      });

      if (res && res.status === 200) {
        container.current.success(
          `Successfully saved staff's data.`,
          `success`,
          {
            timeOut: 3000,
          }
        );
        console.log("/laravel/resources/js/admin/staffs/details.js:43", res);
        dispatch({ type: "set.staffs", data: { staffs: res.data } });
      }
    } catch (e) {
      console.log("/laravel/resources/js/admin/staffs/details.js:67", e);
      container.current.error(`Save staff's data failed.`, `Failed`, {
        timeOut: 10000,
      });
    }
  }

  async function onDelete() {
    try {
      let res = await axios.delete(`/staff/${key}`);
      if (res && res.status === 200) {
        container.current.success(
          `Successfully deleted staff's data.`,
          `success`,
          {
            timeOut: 3000,
          }
        );
        dispatch({ type: "set.staffs", data: { staffs: res.data } });
        dispatch({ type: "select.staff", data: { staff: null } });
      }
    } catch (e) {
      console.log("/laravel/resources/js/admin/staffs/details.js:83", e);
      container.current.error(`Delete staff's data failed.`, `Failed`, {
        timeOut: 10000,
      });
    }
  }

  return (
    <div className="flex flex-col bg-white p-16 flex-1 rounded-md">
      <div className="flex flex-row mb-12">
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <label className="text-sm ">Name</label>
            <input
              key={key}
              className="border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-transparent border-b-2 border-gray-300"
              type="text"
              onChange={(e) => onNameChange(e.target.value)}
              defaultValue={name}
            />
          </div>
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
          <div className="flex flex-col mb-4">
            <label className="text-sm ">Image</label>
            <input
              key={key}
              className="border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-transparent border-b-2 border-gray-300"
              type="text"
              onChange={(e) => onImageChange(e.target.value)}
              defaultValue={image}
            />
          </div>
        </div>

        <div className="border ml-auto w-48 flex flex-row items-center">
          {image && image.length > 0 && (
            <img src={path} className="w-full" alt="" />
          )}
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
