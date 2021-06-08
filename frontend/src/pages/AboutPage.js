import React from "react";
import About from "../components/About";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="aboutPage__top">
        <h3 className="top__h3">About Us</h3>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;
