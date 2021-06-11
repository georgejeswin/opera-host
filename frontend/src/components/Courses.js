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
        <CourseCard
          bg={Engineering2}
          title="Engineering"
          content="Engineering is a stream of education that involves the application of Science, Technology, and Mathematics to design, develop, and build machines...."
        />
        <CourseCard
          bg={Medicine}
          title="Medicine"
          content="A career in medicine is one of the most respected and rewarding professions. Medical courses are offered in various specializations including Medical and Biomedical Sciences..."
        />
        <CourseCard
          bg={IT}
          title="Information Technology"
          content="Information Technology is the use of Hardware, Software, services, and supporting infrastructure to manage and deliver information and related services...."
        />
        <CourseCard
          bg={Fashion}
          title="Fashion"
          content="Fashion and luxury is one of the most creative course options for those who are passionate about garments/ clothes as well as lifestyle accessories. Fashion and luxury course is....."
        />
        <CourseCard
          bg={Nursing}
          title="Nursing"
          content="Nurses are ranked as the most honest, trusted, and ethical professionals. If you are looking for a rewarding occupation and offers a lifetime of opportunities here is the right sector for you."
        />
        <CourseCard
          bg={Management}
          title="Management"
          content="Management is the process of planning, organizing, directing, staffing, controlling, and co-coordinating. It provides the academic knowledge and skills that are required to..."
        />
        <CourseCard
          bg={Hospitality}
          title="Hospitality"
          content="Hospitality is one of the vast and oldest industries and is the fastest growing lucrative career provider. A career in Hospitality can be immensely rewarding as the sector will offer...."
        />
        <CourseCard
          bg={Healthcare}
          title="Health Care"
          content="Health Care courses are an ideal career destination if you are passionate about helping people and making a difference in their lives. A large number of students join for health care..."
        />

        {/* <CoursesCourse bg="" />
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

const CourseCard = ({ bg, title, content }) => {
  return (
    <div className="courseCard">
      <div className="courseCard__img">
        <img src={bg} alt="" />
      </div>
      <div className="courseCard__contents">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <Link to="/courses" className="btn ">
        <span>Learn More</span>
        <i className="fas fa-angle-right"></i>
      </Link>
    </div>
  );
};

export default Courses;
