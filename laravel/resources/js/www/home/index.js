import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";

import { AiOutlineCloseCircle } from "react-icons/ai";

import Title from "../../common/title";
import Notice from "../../models/notice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

Modal.setAppElement("#reactjs");

function Home() {
  const [notices, setNotices] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(new Notice({}));

  async function getAllNotices() {
    let res = await axios.get("/notice/all");
    if (res && res.data) {
      setNotices(res.data.map((notice) => new Notice(notice)));
    } else {
      alert(
        "Cannot fetch ladies' information. Please try to refresh this page."
      );
    }
  }

  useEffect(() => {
    getAllNotices();
  }, []);

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function onShowNoticeDetails(notice) {
    setModalContent(notice);
    setIsOpen(true);
  }

  return (
    <div className="w-full">
      <div className="flex flex-row w-full justify-center mt-10 sm:justify-start">
        <div className="flex flex-col justify-center items-center sm:items-start sm:ml-auto relative px-5 text-white">
          <h1 className="sm:text-5xl">Ph: 07 3803 1000</h1>
          <h1 className="sm:text-5xl">SMS: 04 5031 6989</h1>
          <h1 className="sm:text-2xl roboto">
            26 Magnesium Dr, Crestmead QLD 4132
          </h1>

          <img
            className="absolute top-0 right-0 w-full mt-3"
            src="/bosco/title-bg-bottom.png"
          />
        </div>
      </div>

      <div className="w-full flex-col flex object-cove items-center mt-16 sm:mt-1">
        {notices && notices.length > 0 && (
          <div className="mb-10 px-10 border w-11/12 p-5 m-5" style={{ maxWidth: "768px" }}>
            {notices.map((notice, index) => {
              return (
                <div key={index} className="text-white flex-row flex center text-xl">
                  <p
                    className="cursor-pointer underline"
                    onClick={() => onShowNoticeDetails(notice)}
                  >
                    {notice.getTitle()}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <img
          className="w-full h-auto max-w-3xl"
          src="/bosco/bg-girl.png"
          title="girl"
          alt="girl"
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="mt-12 p-4" style={{ maxWidth: "768px" }}>
          <h1 className="text-3xl text-center">
            Welcome to Angels 26! Brisbane’s best Brothel
          </h1>
          <p className="text-center mx-auto max-w-full">
            <strong>
              Welcome to Angels 26, one of famous brothels with 20 years’
              history in Brisbane and Logan area. We offer some of the best
              full-adult services available in Logan at very competitive prices.
              Recently our brothel is under new management and certainly, we are
              always respected as a nice and tidy brothel. Come in and forget
              the world outside with our beautiful girls. Let the girls make
              your day or night special, as you slip into a haven of pleasure,
              erotica, and relaxation.
            </strong>
          </p>

          <p className="text-center mt-10">
            <b>
              Our sensational ladies from Australia and Asia are here to make
              every fantasy of yours a reality and give you an experience that
              will make you anticipate returning for more.
            </b>
          </p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Notice"
      >
        <div className="flex flex-col max-w-80v sm:max-w-2xl">
          <div className="flex flex-row w-full">
            <button className="ml-auto" onClick={closeModal}>
              <AiOutlineCloseCircle
                className="mb-5"
                style={{ width: "32px", height: "32px" }}
              ></AiOutlineCloseCircle>
            </button>
          </div>

          <p className="font-bold text-2xl mb-10">{modalContent.getTitle()}</p>
          <p className="text-sm">{modalContent.getDescription()}</p>
        </div>
      </Modal>
    </div>
  );
}

if (document.getElementById("reactjs")) {
  ReactDOM.render(<Home />, document.getElementById("reactjs"));
}
