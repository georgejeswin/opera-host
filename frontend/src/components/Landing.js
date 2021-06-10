import React from "react";
import "./Landing.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
SwiperCore.use([Autoplay, Pagination]);
const Landing = () => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const history = useHistory();

  const handleClick = (currentuser) => {
    // console.log(currentuser);
    if (files.length === 0) {
      history.push("/upload");
    }
    files.filter((file) => {
      if (file.user === currentuser._id) {
        history.push("/user/status");
      }
      history.push("/upload");
    });
  };
  return (
    <>
      <div className="landing" id="landing">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="landingPage">
              <div className="landingPage__contents">
                <h3>The Best Educational Services</h3>
                <h1>Opera International</h1>
                <button
                  onClick={() => {
                    !user.email ? history.push("/login") : handleClick(user);
                  }}
                >
                  Register Now!!!
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="landingSlider1">
              <div className="landingSlider1__content">
                {/* <h2>Best services</h2> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="landingSlider2">
              <div className="landingSlider2__content"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="landingSlider3">
              <div className="landingSlider3__content"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Landing;
