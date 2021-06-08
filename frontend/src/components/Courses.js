import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses">
      <h1 className="heading__h1">Study Abroad Courses</h1>
      <div className="courses__items container-fluid">
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
      </div>
      <button className="register__button">View All</button>
    </div>
  );
};

const CoursesComp = ({ bg, page }) => {
  return (
    <div className="coursesCard" style={{ backgroundImage: `url(${bg})` }}>
      <h4 className="coursesCard__h4">Course</h4>
      <p style={{ marginBottom: "0px" }}>
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

export default Courses;
