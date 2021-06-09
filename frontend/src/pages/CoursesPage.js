import React from "react";
import "./CoursesPage.css";
import Courses from "../components/Courses";

const CoursesPage = () => {
  return (
    <div className="coursesPage">
      <div className="coursesPage__top">
        <h3 className="top__h3">Courses</h3>
      </div>
      <Courses />
    </div>
  );
};

export default CoursesPage;
