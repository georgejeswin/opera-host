import React from "react";
import "./Documentation.css";
import DOC from "./images/UNIVERSITIES.png";
import Flag1 from "./images/flag.1.png";
import Flag2 from "./images/flag.2.png";

const Documentation = () => {
  return (
    <div className="documentation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-6 documentation__left">
            <img src={DOC} alt="" />
          </div>
          <div className="col-md-12 col-lg-6 documentation__right">
            <h1>Our Assosiates</h1>
            <hr />

            <div className="documentation__right-images">
              <img src={Flag1} className="fimg" alt="" />
              <img src={Flag2} className="fimg" alt="" />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
