import React from "react";
import "./Documentation.css";
import DOC from "./images/UNIVERSITIES.png";
import U1 from "./images/1.png";
import U2 from "./images/2.png";
import U3 from "./images/3.png";
import U4 from "./images/4.png";
import U5 from "./images/5.png";
import U6 from "./images/6.png";
import U7 from "./images/7.png";
import U8 from "./images/8.png";
import U9 from "./images/9.png";
import U10 from "./images/10.png";
import U11 from "./images/11.png";
import U12 from "./images/12.png";

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
            <img src={U1} alt="" />
            <img src={U2} alt="" />
            <img src={U3} alt="" />
            <img src={U4} alt="" />
            <img src={U5} alt="" />
            <img src={U6} alt="" />
            <img src={U7} alt="" />
            <img src={U8} alt="" />
            <img src={U9} alt="" />
            <img src={U10} alt="" />
            <img src={U11} alt="" />
            <img src={U12} alt="" />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
