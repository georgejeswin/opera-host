import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const history = useHistory();

  const handleClick = (currentuser) => {
    console.log("fuckkkk");
    console.log(currentuser);
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
    <div className="landingPage">
      <div className="landingPage__contents">
        <h3>The Best Educational Consultancy</h3>
        <h1>Opera International</h1>
        <button
          onClick={() => {
            user.length > 0 ? handleClick(user) : history.push("/login");
          }}
        >
          Register Now!!!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
