import React, { useEffect, useState } from "react";
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
import Ukraine from "../components/images/ukraine.jpg";
import USA from "../components/images/usa.jpg";
import SL from "../components/images/switzerland.jpg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const StudyPage = () => {
  return (
    <div className="studyPage">
      <div className="studyPage__top">
        <h3 className="top__h3">Study In</h3>
      </div>
      <div className="studyPage__items container-fluid my-5">
        <StudyPageCard bg={UK} country="UK" />
        <StudyPageCard bg={Germany} country="Germany" />
        <StudyPageCard
          bg={NZ}
          country="New Zeland"
          content="The eight institutions that make up the New Zealand university system are located in cities across the country’s two main islands, the North and the South. This distribution gives students the chance to pursue a wide range of opportunities in the study, work, recreation and culture."
        />
        <StudyPageCard bg={France} country="France" />
        <StudyPageCard
          bg={Australia}
          country="Australia"
          content="The Australian education system has a strong international reputation and is known for its effective structure and innovative policy developments. Many other countries, eager to improve their own education systems, turn to Australia for advice."
        />
        <StudyPageCard bg={Singapore} country="Singapore" />
        <StudyPageCard bg={SL} country="Switzerland" />
        <StudyPageCard
          bg={USA}
          country="USA"
          content="American universities are widely known for the quality of their teaching and research. The United States is the number one and largest destination for international students seeking higher education overseas or study abroad."
        />
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

const StudyPageCard = ({ bg, content, country }) => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const history = useHistory();
  const [fileUploaded, setFileUploaded] = useState(false);
  const filesUploaded = (currentuser) => {
    files.filter((file) => {
      if (file.user === currentuser._id) {
        setFileUploaded(true);
      }
    });
  };
  useEffect(() => {
    filesUploaded(user);
    if (files.length <= 0) {
      history.push("/user");
    }
  }, [files.length, history, user]);

  const handleClick = (currentuser) => {
    if (files.length === 0) {
      history.push("/upload");
    }
    if (fileUploaded) {
      history.push("/user/status");
    } else {
      history.push("/upload");
    }
  };
  return (
    <div className="coursePageCard">
      <div className="coursePageCard__left">
        <img src={bg} alt="" />
      </div>
      <div className="coursePageCard__right">
        <h3>{country}</h3>
        <hr className="coursePageCard__divider" />
        <p className="coursePageCard__p">{content}</p>
        <button
          className="register__button"
          onClick={() => {
            !user.email ? history.push("/login") : handleClick(user);
          }}
        >
          Apply Now!!
        </button>
      </div>
    </div>
  );
};

export default StudyPage;
