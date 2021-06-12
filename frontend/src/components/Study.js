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
import Ukraine from "./images/ukraine.jpg";
import USA from "./images/usa.jpg";
import SL from "./images/switzerland.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectFade, Autoplay, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, EffectFade, Pagination]);
const Study = () => {
  return (
    <div className="study">
     
      <h1 className="heading__h1-res">Study Abroad Countries</h1>

      <div className="study__left">
        <h1 className="heading__h1">Study Abroad Countries</h1>
        <p>The Best Places to Study Abroad</p>
        <Link to="/study-in">
          <button className="register__button">View All</button>
        </Link>
      </div>
      <Swiper
        slidesPerView={3}
        // spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        className="mySwiper"
      >
      <div className="study__items container-fluid">
     
      
      <SwiperSlide> <StudyComp bg={UK} country="UK" /> </SwiperSlide>
      <SwiperSlide> <StudyComp bg={Germany} country="Germany" /> </SwiperSlide>  
      <SwiperSlide>  <StudyComp bg={NZ} country="New Zeland" />  </SwiperSlide>
      <SwiperSlide>  <StudyComp bg={France} country="France" />  </SwiperSlide>
      <SwiperSlide>  <StudyComp bg={Australia} country="Australia" /> </SwiperSlide>
      <SwiperSlide>  <StudyComp bg={Singapore} country="Singapore" />  </SwiperSlide>
      <SwiperSlide> <StudyComp bg={SL} country="Switzerland" />  </SwiperSlide> 
      <SwiperSlide>  <StudyComp bg={USA} country="USA" />  </SwiperSlide>
      <SwiperSlide> <StudyComp bg={Ireland} country="Ireland" /> </SwiperSlide> 
      <SwiperSlide>  <StudyComp bg={Italy} country="Italy" />  </SwiperSlide>
      <SwiperSlide>  <StudyComp bg={Ukraine} country="Ukraine" />  </SwiperSlide>
      <SwiperSlide> <StudyComp bg={Russia} country="Russa" /></SwiperSlide>  
      <SwiperSlide><StudyComp bg={Sweden} country="Sweden" /></SwiperSlide>  
      <SwiperSlide> <StudyComp bg={Armenia} country="Armenia" /></SwiperSlide> 
      <SwiperSlide> <StudyComp bg={China} country="China" /></SwiperSlide> 
      <SwiperSlide><StudyComp bg={Dubai} country="Dubai" /></SwiperSlide>  
      <SwiperSlide> <StudyComp bg={Georgia} country="Georgia" /></SwiperSlide>  
      <SwiperSlide><StudyComp bg={Latvia} country="Latvia" /></SwiperSlide>  
      <SwiperSlide><StudyComp bg={Malta} country="Malta" /></SwiperSlide>  
      <SwiperSlide><StudyComp bg={Norway} country="Norway" /></SwiperSlide>  
       <SwiperSlide><StudyComp bg={Poland} country="Poland" /></SwiperSlide> 
       
      </div>
      </Swiper>
      <Link to="/study-in">
        <button className="register__button-res register__button">
          View All
        </button>
      </Link>
    </div>
  );
};
const StudyComp = ({ bg, country, content }) => {
  return (
    <div className="studyCardComp">
      <img src={bg} alt="" className="studyCardComp__img" />
      <div className="studyCardComp__content">
        <h4 className="studyCard__h4">{country}</h4>
        <p className="studyCard__p">{content}</p>
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
