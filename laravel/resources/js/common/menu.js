import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  function open() {
    setOpen(true);
  }
  function close() {
    setOpen(false);
  }
  return (
    <div className="w-full h-20 flex flex-row items-center bg-gray-900">
      <img
        className="cursor-pointer h-14 w-auto object-contain ml-2"
        src="/bosco/logo.jpg"
      />
      <div className="ml-auto text-2xl mr-10" onClick={open}>
        <i className="fa fa-bars"></i>
      </div>

      {/*menu*/}
      <div
        className="fixed inset-0 z-10 w-screen"
        style={{
          left: `${isOpen ? 0 : "-100vw"}`,
          backgroundColor: "rgba(0,0,0,0.8)",
          transition: "left 0.3s ease-in-out",
        }}
        onClick={close}
      >
        <div className="w-full h-20 flex flex-row items-center bg-gray-900">
          <img
            className="cursor-pointer h-14 w-auto object-contain ml-2"
            src="/bosco/logo.jpg"
          />
          <div className="ml-auto text-2xl mr-10" onClick={close}>
            <i className="fa fa-times"></i>
          </div>
        </div>

        <div className="flex flex-col text-xl p-12">
          <a className="py-3" href="/">
            home
          </a>
          <a className="py-3" href="/service">
            service
          </a>
          <a className="py-3" href="/ladies">
            ladies
          </a>
          <a className="py-3" href="/whoson">
            whoson
          </a>
          <a className="py-3" href="/contactus">
            contactus
          </a>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("menu")) {
  ReactDOM.render(<Menu />, document.getElementById("menu"));
}
