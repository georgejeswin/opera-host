import React, { useEffect, useState } from "react";
import "./CoursesPage.css";
import Management from "../components/images/management.jpg";
import Medicine from "../components/images/Medicine.jpg";
import Nursing from "../components/images/nursing.jpg";
// import Nursing1 from "../components/images/nursing1.jpg";
// import Nursing2 from "../components/images/nursing2.jpg";
import IT from "../components/images/IT.jpg";
import Hospitality from "../components/images/hospitality.jpg";
// import Hospitality1 from "../components/images/hospitality1.jpg";
// import Engineering1 from "../components/images/engineering1.jpg";
import Engineering2 from "../components/images/engineering2.jpg";
import Fashion from "../components/images/fashion.jpg";
import Healthcare from "../components/images/HealthCare.jpeg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CoursesPage = () => {
  return (
    <div className="coursesPage">
      <div className="coursesPage__top">
        <h3 className="top__h3">Courses</h3>
      </div>
      <div className="coursesPage__items">
        <CoursePageCard
          bg={Engineering2}
          title="Engineering"
          content="Engineering is a stream of education that involves the application of Science, Technology, and Mathematics to design, develop, and build machines, structures and processes. It is one of the vital influences that shape our society."
        />
        <CoursePageCard
          bg={Medicine}
          title="Medicine"
          content="A career in medicine is one of the most respected and rewarding professions. Medical courses are offered in various specializations including Medical and Biomedical Sciences, Pharmacy, Allied health, Nursing, Health, and fitness."
        />{" "}
        <CoursePageCard
          bg={IT}
          title="IT"
          content="Information Technology is the use of Hardware, Software, services, and supporting infrastructure to manage and deliver information and related services. IT professionals provide technical support, maintenance, device management, and security testing services."
        />{" "}
        <CoursePageCard
          bg={Fashion}
          title="Fashion"
          content="Fashion and luxury is one of the most creative course options for those who are passionate about garments/ clothes as well as lifestyle accessories. Fashion and luxury course is one of the most prosperous vocational educational streams and covers all that you need to learn right from design to distribution."
        />{" "}
        <CoursePageCard
          bg={Nursing}
          title="Nursing"
          content="Nurses are ranked as the most honest, trusted, and ethical professionals. If you are looking for a rewarding occupation and offers a lifetime of opportunities here is the right sector for you."
        />{" "}
        <CoursePageCard
          bg={Management}
          title="Management"
          content="Management is the process of planning, organizing, directing, staffing, controlling, and co-coordinating. It provides the academic knowledge and skills that are required to work for businesses of all sizes – from multinational companies to start–ups."
        />
        <CoursePageCard
          bg={Hospitality}
          title="Hospitality"
          content="Hospitality is one of the vast and oldest industries and is the fastest growing lucrative career provider. A career in Hospitality can be immensely rewarding as the sector will offer you a lot, from becoming renewed industry professionals to aspiring business leaders."
        />
        <CoursePageCard
          bg={Healthcare}
          title="Healthcare"
          content="Health Care courses are an ideal career destination if you are passionate about helping people and making a difference in their lives. A large number of students join for health care courses as it offers an ideal career destination."
        />
        {/* <CompCard bg={Engineering2} title="Engineering" />
        <CompCard bg={Medicine} title="Medicine" />
        <CompCard bg={IT} title="Information Technology" />
        <CompCard bg={Fashion} title="Fashion" />
        <CompCard bg={Nursing} title="Nursing" />
        <CompCard bg={Management} title="Management" />
        <CompCard bg={Hospitality} title="Hospitality" />
        <CompCard bg={Healthcare} title="Health Care" /> */}
      </div>
    </div>
  );
};

const CoursePageCard = ({ bg, content, title }) => {
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
        <h3>{title}</h3>
        <hr className="coursePageCard__divider" />
        <p className="coursePageCard__p"> {content}</p>
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
export default CoursesPage;
