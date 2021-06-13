import React, { useEffect, useState } from "react";
import "./Landing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

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
    // if (files.length <= 0) {
    //   history.push("/user");
    // }
  }, [user]);

  const handleClick = () => {
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
                    !user.email ? history.push("/login") : handleClick();
                  }}
                >
                  Register Now!!!
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="landingSlider1">
              <div className="landingPage__contents">
                <h1 className="landingSlider1__h1">
                  Get Your <br /> Dream{" "}
                  <span className="landingSlider1__span">Courses In</span>
                  <br /> Dream{" "}
                  <span className="landingSlider1__span">
                    College & University
                  </span>
                </h1>

                <Link to="/study-in">
                  <button className="landingSlider1__button">
                    Find Destination
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="landingSlider2">
              <div className="landingPage__contents">
                <h3 className="landingSlider2__h3">Start Learning Today</h3>
                <h1 className="landingSlider2__h1">
                  <span className="landingSlider2__span">
                    Decide Your Course Of Future <br />
                    With Us
                  </span>
                </h1>

                <Link to="/courses">
                  <button className="landingSlider2__button">Courses</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="landingSlider3">
              <div className="landingSlider3__content">
                <Link to="/contact">
                  <button className="landing__button">Contact Us</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Landing;
