import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./NavTop.css";

const NavTop = () => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const history = useHistory();

  const handleClick = (currentuser) => {
    if (files.length === 0) {
      history.push("/upload");
    }
    files.filter((file) => {
      if (file.user === currentuser._id) {
        history.push("/user/status");
      } else {
        history.push("/upload");
      }
    });
  };
  return (
    <div className="navTop">
      <div className="navTop__left p-1 pt-3 pb-3">
        <p className="pl-3">info.operainternational@gmail.com</p>
        <p className="ml-5">+91 75598 80999</p>
      </div>
      <div className="navTop__right">
        <button
          onClick={() => {
            user ? handleClick(user) : history.push("/login");
          }}
        >
          Apply Now!!
        </button>
      </div>
    </div>
  );
};

export default NavTop;
