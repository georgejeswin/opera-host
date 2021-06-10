import React from "react";
import "./StudyPage.css";
import { Link } from "react-router-dom";
import Armenia from "../components/images/Armenia.jpg";
import Australia from "../components/images/australia.jpg";
import China from "../components/images/china.jpg";
import Dubai from "../components/images/duabai.jpg";
import France from "../components/images/france.jpg";
import Georgia from "../components/images/georgia.jpg";
import Germany from "../components/images/germany.jpg";
import Ireland from "../components/images/ireland.jpg";
import Italy from "../components/images/italy.jpg";
import Latvia from "../components/images/latvia.jpg";
import Malta from "../components/images/malta.jpg";
import Norway from "../components/images/norway.jpg";
import NZ from "../components/images/nz.jpg";
import Poland from "../components/images/poland.jpg";
import Russia from "../components/images/russia.jpg";
import Singapore from "../components/images/Singapore.jpg";
import Sweden from "../components/images/swedan.jpg";
import UK from "../components/images/uk.jpg";
import Ukraine from "../components/images/ukraine1.jpg";
import USA from "../components/images/usa.jpg";
import SL from "../components/images/switzerland.jpg";

const StudyPage = () => {
  return (
    <div className="studyPage">
      <div className="studyPage__top">
        <h3 className="top__h3">Study In</h3>
      </div>
      <div className="studyPage__items">
        <StudyComp bg={UK} country="UK" />
        <StudyComp bg={Germany} country="Germany" />
        <StudyComp bg={NZ} country="New Zeland" />
        <StudyComp bg={France} country="France" />
        <StudyComp bg={Australia} country="Australia" />
        <StudyComp bg={Singapore} country="Singapore" />
        <StudyComp bg={SL} country="Switzerland" />
        <StudyComp bg={USA} country="USA" />
        <StudyComp bg={Ireland} country="Ireland" />
        <StudyComp bg={Italy} country="Italy" />
        <StudyComp bg={Ukraine} country="Ukraine" />
        <StudyComp bg={Russia} country="Russa" />
        <StudyComp bg={Sweden} country="Sweden" />
        <StudyComp bg={Armenia} country="Armenia" />
        <StudyComp bg={China} country="China" />
        <StudyComp bg={Dubai} country="Dubai" />
        <StudyComp bg={Georgia} country="Georgia" />
        <StudyComp bg={Latvia} country="Latvia" />
        <StudyComp bg={Malta} country="Malta" />
        <StudyComp bg={Norway} country="Norway" />
        <StudyComp bg={Poland} country="Poland" />
      </div>{" "}
    </div>
  );
};
const StudyComp = ({ bg, country }) => {
  return (
    <div className="studyCard" style={{ backgroundImage: `url(${bg})` }}>
      <h4 className="studyCard__h4">{country}</h4>
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
export default StudyPage;
