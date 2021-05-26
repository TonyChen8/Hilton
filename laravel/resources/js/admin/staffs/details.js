import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import Staff from "../../models/staff";

function Details() {
  const staff = useSelector((state) => state.selectedStaff || new Staff({}));

  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImageName] = useState("");
  const [path, setImagePath] = useState("");

  useEffect(() => {
    setKey(staff.getId());
    setName(staff.getName());
    setTitle(staff.getTitle());
    setImageName(staff.getImage());
    setImagePath(staff.getImage(true));
  }, [staff]);

  function onNameChange(text) {
    console.log("/laravel/resources/js/admin/staffs/details.js:11", text);
  }
  function onTitleChange(text) {
    console.log("/laravel/resources/js/admin/staffs/details.js:11", text);
  }
  function onImageChange(text) {
    let newImage = new Staff({ image: text });
    setImagePath(newImage.getImage(true));
    setImageName(newImage.getImage());
  }

  function onSave() {}
  function onDelete() {}

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
          <img src={path} className="w-full" alt="" />
        </div>
      </div>

      <div className="mb-16">
        <label className="text-sm">Description</label>
        <textarea type="text" className="w-full" />
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
    </div>
  );
}

export default Details;
