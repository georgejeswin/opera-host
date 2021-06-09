import React from "react";
import "./StudyPage.css";
import Study from "../components/Study";
const StudyPage = () => {
  return (
    <div className="studyPage">
      <div className="studyPage__top">
        <h3 className="top__h3">Study In</h3>
      </div>
      <Study />
    </div>
  );
};

export default StudyPage;
