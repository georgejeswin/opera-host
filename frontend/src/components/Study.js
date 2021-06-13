import React, { useEffect, useState } from "react";
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
import Canada from "./images/canada.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectFade, Autoplay, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, EffectFade, Pagination]);
const Study = () => {
  const [mobile, setMobile] = useState(4);
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setMobile(1);
    }
  }, [window.innerWidth]);
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
        slidesPerView={mobile}
        className="swiper__slide"
        // spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div className="study__items container-fluid">
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={UK}
              country="UK"
              content=" British qualifications are recognisedand respected around the world.
          The UK enjoys a reputation...."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Germany}
              country="Germany"
              content="German education offers the possibility to study with students across 
          the globe and hence establish..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Canada}
              country="Canada"
              content="Canada is a hugely popular choice as an overseas study destination for a 
          host of reasons. From secure environment...."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={NZ}
              country="New Zeland"
              content="The eight institutions that make up the New Zealand university system are located in cities across the country’s two.."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={France}
              country="France"
              content="Each year, almost 130,000 young people from all over the world come to France to study. They choose France to study...."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Australia}
              country="Australia"
              content="The Australian education system has a strong international reputation and is known for its effective structure and..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Singapore}
              country="Singapore"
              content="Singapore is the premier education hub of Asia where tradition and modernity tastefully unite offering students a..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={SL}
              country="Switzerland"
              content="Switzerland is a mountainous nation renowned for its outstanding universities, research institutions and high quality ..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={USA}
              country="USA"
              content="American universities are widely known for the quality of their teaching and research. The United States is the number..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Ireland}
              country="Ireland"
              content="Ireland is one of the best-educated countries in the European Union and continues to be a destination of choice..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Italy}
              country="Italy"
              content="Italy is counted as eight most industrialized countries in the world with a strong manufacturing industry and robust..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Ukraine}
              country="Ukraine"
              content="Quality education at an affordable cost has made Ukraine the most popular student abroad study destinations...."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Russia}
              country="Russia"
              content="Russia is a hospitable and inviting country. Geographically the biggest country on the planet, Russia has in store.."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Sweden}
              country="Sweden"
              content="Sweden is a Continental country with myriad opportunities to get involved in Sweden’s cultural activities via the, plays.."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Armenia}
              country="Armenia"
              content="Armenian is an interesting country rich with the heritage of the past, beautiful landscapes, high mountaintops, and unique...."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={China}
              country="China"
              content="China is one of the most sought after study destinations by international students, thanks to its world class..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Dubai}
              country="Dubai"
              content="The latest addition to the list of best abroad studies destination. Dubai is a country with the fastest-growing economy..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Georgia}
              country="Georgia"
              content="Located in the Caucasus, Georgia is a small country that’s rich in history and culture and is also home to 10000+.."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Latvia}
              country="Latvia"
              content="Latvia is a country with varied landscapes, sprawling cities and age-old cultural traditions. Latvia offers students, the..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Malta}
              country="Malta"
              content="Even though the country is small in size, Malta has some truly unique features that draw students to the island destination..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Norway}
              country="Norway"
              content="Norway is famous for its outdoor culture and rightly so, given the abundance of natural beauty afforded by the country’s.."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i class="fas fa-chevron-left fa-1x"></i>
            <StudyComp
              bg={Poland}
              country="Poland"
              content="Polish university education system has a history of 650 years of educating high profile professionals. The quality of the..."
            />
            <i class="fas fa-chevron-right fa-1x"></i>
          </SwiperSlide>
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
