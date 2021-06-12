import React from "react";
import AboutImg from "../components/images/about.png";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="aboutPage__top">
        <h3 className="top__h3">About Us</h3>
      </div>
      <div className="about container about__container">
        <h1 className="heading__h1 mt-5">
          Leading Study Abroad Consultants In Kerala
        </h1>
        <div className="row about__row">
          <div className="about__left col-md-6 col-12">
            <img src={AboutImg} alt="About" data-aos="fade-right" />
          </div>
          <div className="about__right col-md-6 col-12 p-5">
            <p>
              With A decade of excellent experience, OPERA INTERNATIONAL helps
              students to find admissions in the top colleges abroad. Today, we
              represent various institutes, colleges and universities from
              ABROAD in UK, Australia, Germany, New Zeland, Poland etc. <br />{" "}
              Our mission is to be the best centre of excellence in educational
              consultancy for all the professional courses to suit the ever
              changing needs of the society. <br /> our vision is to create high
              quality academicians and professionals through value education and
              training that has global focus enriched by extensive interactions.
              <br />
              We value : Quality in our service, Reputation and reorganization
              of the colleges, Excellent academic environment, Quality education
              and research, Safe and peaceful atmosphere in the colleges,
              Confidence, integrity, excellence and career development,
              Effectiveness, efficiency and accountability in response to the
              needs of the students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
