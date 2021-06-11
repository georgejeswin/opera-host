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
      <div className="studyPage__items container-fluid my-5">
        <StudyPageCard bg={UK} country="UK" />
        <StudyPageCard bg={Germany} country="Germany" />
        <StudyPageCard bg={NZ} country="New Zeland" />
        <StudyPageCard bg={France} country="France" />
        <StudyPageCard bg={Australia} country="Australia" />
        <StudyPageCard bg={Singapore} country="Singapore" />
        <StudyPageCard bg={SL} country="Switzerland" />
        <StudyPageCard bg={USA} country="USA" />
        <StudyPageCard bg={Ireland} country="Ireland" />
        <StudyPageCard bg={Italy} country="Italy" />
        <StudyPageCard bg={Ukraine} country="Ukraine" />
        <StudyPageCard bg={Russia} country="Russia" />
        <StudyPageCard bg={Sweden} country="Sweden" />
        <StudyPageCard bg={Armenia} country="Armenia" />
        <StudyPageCard bg={China} country="China" />
        <StudyPageCard bg={Dubai} country="Dubai" />
        <StudyPageCard bg={Georgia} country="Georgia" />
        <StudyPageCard bg={Latvia} country="Latvia" />
        <StudyPageCard bg={Malta} country="Malta" />
        <StudyPageCard bg={Norway} country="Norway" />
        <StudyPageCard bg={Poland} country="Poland" />
      </div>
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
          maxime. Nulla aperiam dolor.... Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Voluptas, eveniet placeat.
        </p>
        {/* <Link to="/" className="btn1">
          <span>Learn More</span>
          <i className="fas fa-angle-right" id="fas1"></i>
        </Link> */}
      </div>
    </div>
  );
};

const StudyPageCard = ({ bg, content, country }) => {
  return (
    <div className="coursePageCard">
      <div className="coursePageCard__left">
        <img src={bg} alt="" />
      </div>
      <div className="coursePageCard__right">
        <h3>{country}</h3>
        <hr className="coursePageCard__divider" />
        <p className="coursePageCard__p">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          maxime. Nulla aperiam dolor.... Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Voluptas, eveniet placeat. Odit esse
          vitae sit quisquam sint repudiandae, quos, atque error, voluptates
          accusamus perferendis sapiente libero animi laborum dolores ex.
        </p>
      </div>
    </div>
  );
};

// const StudyCard = ({ bg, country }) => {
//   return (
//     <div className="card middle">
//       <div className="front">
//         <img src={bg} alt="" />
//         <div className="back">
//           <div
//             className="back-content middle"
//             style={{ backgroundImage: `url(${bg})` }}
//           >
//             <h2>{country}</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Reiciendis quibusdam molestiae incidunt obcaecati maxime magni,
//               ullam, aperiam dolores eligendi iste beatae in? Architecto saepe
//               dicta quis, impedit maxime nihil distinctio.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export default StudyPage;
