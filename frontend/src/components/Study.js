import React from "react";
import "./Study.css";
import { Link } from "react-router-dom";
import Armenia from "./images/Armenia.jpg";
import Australia from "./images/australia.jpg";
import China from "./images/china.jpg";
import Dubai from "./images/duabai.jpg";
import France from "./images/france.jpg";
import Georgia from "./images/georgia.jpg";
import Germany from "./images/germany.jpg";
import Ireland from "./images/ireland.jpg";
import Italy from "./images/italy.jpg";
import Latvia from "./images/latvia.jpg";
import Malta from "./images/malta.jpg";
import Norway from "./images/norway.jpg";
import NZ from "./images/nz.jpg";
import Poland from "./images/poland.jpg";
import Russia from "./images/russia.jpg";
import Singapore from "./images/Singapore.jpg";
import Sweden from "./images/swedan.jpg";
import UK from "./images/uk.jpg";
import Ukraine from "./images/ukraine1.jpg";
import USA from "./images/usa.jpg";
import SL from "./images/switzerland.jpg";

const Study = () => {
  return (
    <div className="study">
      <h1 className="heading__h1-res">Study Abroad Countries</h1>

      <div className="study__left">
        <h1 className="heading__h1">Study Abroad Countries</h1>
        <button className="register__button">View All</button>
      </div>
      <div className="study__items container-fluid">
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
      </div>
      <Link to="/study-in">
        <button className="register__button-res register__button">
          View All
        </button>
      </Link>
    </div>
  );
};
const StudyComp = ({ bg, country }) => {
  return (
    <div className="studyCardComp">
      <img src={bg} alt="" className="studyCardComp__img" />
      <div className="studyComp__content">
        <h4 className="studyCard__h4">{country}</h4>
        <p className="studyCard__p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          maxime. Nulla aperiam dolor....
        </p>
        <Link to="/study-in" className="btn1">
          <span>Learn More</span>
          <i className="fas fa-angle-right" id="fas1"></i>
        </Link>
      </div>
    </div>
  );
};
// const StudyComp = ({ bg, country }) => {
//   return (
//     <div className="studyCard" style={{ backgroundImage: `url(${bg})` }}>
//       <h4 className="studyCard__h4">{country}</h4>
//       <p>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, maxime.
//         Nulla aperiam dolor....
//       </p>
//       <Link to="/study-in" className="btn1">
//         <span>Learn More</span>
//         <i className="fas fa-angle-right" id="fas1"></i>
//       </Link>
//     </div>
//   );
// };

export default Study;
