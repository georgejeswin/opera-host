import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import Management from "./images/management.jpg";
import Medicine from "./images/Medicine.jpg";
import Nursing from "./images/nursing.jpg";
// import Nursing1 from "./images/nursing1.jpg";
// import Nursing2 from "./images/nursing2.jpg";
import IT from "./images/IT.jpg";
import Hospitality from "./images/hospitality.jpg";
// import Hospitality1 from "./images/hospitality1.jpg";
// import Engineering1 from "./images/engineering1.jpg";
import Engineering2 from "./images/engineering2.jpg";
import Fashion from "./images/fashion.jpg";
import Healthcare from "./images/HealthCare.jpeg";

const Courses = () => {
  return (
    <div className="courses">
      <h1 className="heading__h1">Study Abroad Courses</h1>
      <div className="courses__items container-fluid">
        <CompCard bg={Engineering2} title="Engineering" />
        <CompCard bg={Medicine} title="Medicine" />
        <CompCard bg={IT} title="Information Technology" />
        <CompCard bg={Fashion} title="Fashion" />
        <CompCard bg={Nursing} title="Nursing" />
        <CompCard bg={Management} title="Management" />
        <CompCard bg={Hospitality} title="Hospitality" />
        <CompCard bg={Healthcare} title="Health Care" />

        {/* <CoursesComp bg="" />
        <CoursesComp bg="" />
        <CoursesComp bg="" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" /> */}
      </div>
      <Link to="/courses">
        <button className="register__button">View All</button>
      </Link>
    </div>
  );
};

// const CoursesComp = ({ bg, page }) => {
//   return (
//     <div className="coursesCard" style={{ backgroundImage: `url(${bg})` }}>
//       <h4 className="coursesCard__h4">Course</h4>
//       <p style={{ marginBottom: "0px" }}>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, maxime.
//         Nulla aperiam dolor....
//       </p>
//       <Link to="/" className="btn1">
//         <span>Learn More</span>
//         <i className="fas fa-angle-right" id="fas1"></i>
//       </Link>
//     </div>
//   );
// };

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
      <Link to="/courses" className="btn ">
        <span>Learn More</span>
        <i className="fas fa-angle-right"></i>
      </Link>
    </div>
  );
};

export default Courses;
