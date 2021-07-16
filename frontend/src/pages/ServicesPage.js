import React, { useEffect, useState } from "react";
import "./ServicesPage.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Placement from "../components/images/placement.jpeg";
import Councelling from "../components/images/councelling.jpeg";
import Finance from "../components/images/finance.jpeg";
import Career from "../components/images/admission.jpeg";

const ServicesPage = () => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const history = useHistory();
  const [fileUploaded, setFileUploaded] = useState(false);
  const filesUploaded = (currentuser) => {
    if(files.length>0){
      setFileUploaded(true);
    }
    // files.filter((file) => {
    //   if (file.user === currentuser._id) {
    //     setFileUploaded(true);
    //   }
    // });
  };
  useEffect(() => {
    filesUploaded(user);
  }, [user]);

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
    <div className="servicesPage">
      <div className="servicesPage__top">
        <h3 className="top__h3">Our Services</h3>
      </div>
      <div className="services__items container-fluid">
        <ServicesPageCard
          img={Career}
          title="Admission Counseling"
          content=" We access your qualification, interest and aptitude and suggest you
            the best course and institute around. Once you decide for the course
            and institute, application forms are filled and sendto institute
            along with fee."
        />
        <ServicesPageCard
          img={Placement}
          title="Placement Assistance"
          content=" By our network of high quality academicians and professionals
            worldwide, we arrange various job opportunities for the students to
            be an excellent professional. We help the students to connect with
            the local community"
        />

        <ServicesPageCard
          img={Finance}
          title="Financial Guidelines"
          content=" To find the finance required for the desired study package and
            ensure its stability, we assist the students and parents to avail
            various educational loans from concerned banks, help the
            students who are eligible to get received scholarships or
            sponsorships."
        />
        <ServicesPageCard
          img={Councelling}
          title="Career Guidance"
          content=" We help students to plan their career according to the rapidly
            changing needs of the complex global economy & We assist in all the
            legal actions if required for a student during the academic period
            in completion of their courses"
        />
      </div>
      <button
        className="register__button p-3 mb-5"
        onClick={() => {
          !user.email ? history.push("/login") : handleClick(user);
        }}
      >
        Register Now!!!
      </button>
    </div>
  );
};

const ServicesPageCard = ({ img, content, title }) => {
  return (
    <div className="coursePageCard">
      <div className="servicePageCard__left">
        <img src={img} alt="" />
      </div>
      <div className="servicePageCard__right">
        <h3>{title}</h3>
        <hr className="coursePageCard__divider" />
        <p className="coursePageCard__p">{content}</p>
      </div>
    </div>
  );
};

export default ServicesPage;
