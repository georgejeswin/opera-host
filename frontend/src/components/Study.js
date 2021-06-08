import React from "react";
import "./Study.css";
import { Link } from "react-router-dom";

const Study = () => {
  return (
    <div className="study">
      <h1 className="heading__h1-res">Study Abroad Countries</h1>

      <div className="study__left">
        <h1 className="heading__h1">Study Abroad Countries</h1>
        <button className="register__button">View All</button>
      </div>
      <div className="study__items container-fluid">
        <CompCard bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <CompCard bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />

        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
        <StudyComp bg="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />
      </div>
      <button className="register__button-res register__button">
        View All
      </button>
    </div>
  );
};

const StudyComp = ({ bg, page }) => {
  return (
    <div className="studyCard" style={{ backgroundImage: `url(${bg})` }}>
      <h4 className="studyCard__h4">Country</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, maxime.
        Nulla aperiam dolor....
      </p>
      <Link to="/" className="btn1">
        <span>Learn More</span>
        <i className="fas fa-angle-right" id="fas1"></i>
      </Link>
    </div>
  );
};

const CompCard = ({ bg, page }) => {
  return (
    <div className="compCard">
      <div className="compCard__img">
        <img src={bg} alt="" />
      </div>
      <div className="compCard__contents">
        <h4>Country</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          maxime. Nulla aperiam dolor....
        </p>
      </div>
      <Link to="/" className="btn ">
        <span>Learn More</span>
        <i className="fas fa-angle-right"></i>
      </Link>
    </div>
  );
};

export default Study;
