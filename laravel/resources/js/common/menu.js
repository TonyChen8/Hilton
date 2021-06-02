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
    <div className="w-full h-20">
      <div className="fixed left-0 top-0 z-10 w-full h-20 flex flex-row items-center bg-gray-900">
        <img
          className="cursor-pointer h-14 w-auto object-contain ml-2"
          src="/bosco/logo.jpg"
        />
        <div className="ml-auto text-2xl mr-10" onClick={open}>
          <i className="fa fa-bars"></i>
        </div>
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
            Home
          </a>
          <a className="py-3" href="/service">
            Service
          </a>
          <a className="py-3" href="/ladies">
            Ladies
          </a>
          <a className="py-3" href="/whoson">
            Who's on
          </a>
          <a className="py-3" href="/contact">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

if (document.getElementById("menu")) {
  ReactDOM.render(<Menu />, document.getElementById("menu"));
}
