import React from "react";
import "./CoursesPage.css";
import Management from "../components/images/management.jpg";
import Medicine from "../components/images/Medicine.jpg";
import Nursing from "../components/images/nursing.jpg";
import Nursing1 from "../components/images/nursing1.jpg";
import Nursing2 from "../components/images/nursing2.jpg";
import IT from "../components/images/IT.jpg";
import Hospitality from "../components/images/hospitality.jpg";
import Hospitality1 from "../components/images/hospitality1.jpg";
import Engineering1 from "../components/images/engineering1.jpg";
import Engineering2 from "../components/images/engineering2.jpg";
import Fashion from "../components/images/fashion.jpg";
import Healthcare from "../components/images/HealthCare.jpeg";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
    <div className="coursesPage">
      <div className="coursesPage__top">
        <h3 className="top__h3">Courses</h3>
      </div>
      <div className="coursesPage__items">
        <CompCard bg={Engineering2} title="Engineering" />
        <CompCard bg={Medicine} title="Medicine" />
        <CompCard bg={IT} title="Information Technology" />
        <CompCard bg={Fashion} title="Fashion" />
        <CompCard bg={Nursing} title="Nursing" />
        <CompCard bg={Management} title="Management" />
        <CompCard bg={Hospitality} title="Hospitality" />
        <CompCard bg={Healthcare} title="Health Care" />
      </div>
    </div>
  );
};

const CompCard = ({ bg, title, content }) => {
  return (
    <div className="compCard">
      <div className="compCard__img">
        <img src={bg} alt="" />
      </div>
      <div className="compCard__contents">
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          maxime. Nulla aperiam dolor....
        </p>
      </div>
      {/* <Link to="/" className="btn ">
        <span>Learn More</span>
        <i className="fas fa-angle-right"></i>
      </Link> */}
    </div>
  );
};
export default CoursesPage;
