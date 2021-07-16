import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./NavTop.css";

const NavTop = () => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const history = useHistory();
  const [fileUploaded, setFileUploaded] = useState(false);
  const filesUploaded = (currentuser) => {
    if(files.length>0){
      setFileUploaded(true);
    }
    // files.filter((file) => {
    //   if (file.user === currentuser._id) {
    //     setFileUploaded(true);
    //   }
    // });
  };
  useEffect(() => {
    filesUploaded(user);
  }, [user]);

  const handleClick = (currentuser) => {
    if (files.length === 0) {
      history.push("/upload");
    }
    if (fileUploaded) {
      history.push("/user/status");
    } else {
      history.push("/upload");
    }
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
            !user.email ? history.push("/login") : handleClick(user);
          }}
        >
          Apply Now!!
        </button>
      </div>
    </div>
  );
};

export default NavTop;
