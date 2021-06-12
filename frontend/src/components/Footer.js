import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import LOGO from "./images/logo-white.png";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Footer = ({ history }) => {
  return (
    <div className="footer pt-4">
      <div className="container">
        <div className="row ">
          <div className="footer__first col-md-4 px-5 py-3">
            <img src={LOGO} alt="logo" />
            <p>
              MK Tower <br /> Dr Ambedkar Women's College - <br /> Building
              679303 Pattambi
            </p>
            <p>+91 75598 80999</p>
            <p>info.operainternational@gmail.com</p>
          </div>
          <div className="footer__second col-md-4 px-5 py-3">
            <h1>Services</h1>
            <h5>Financial Aid</h5>
            <h5>Secure Service</h5>
            <h5>Internet Service</h5>
            <h5>Housing</h5>
            <h5>Information Technologies</h5>
            <h5>Student Life</h5>
          </div>
          <div className="footer__third col-md-4 px-5 py-3">
            <h1>Quick Links</h1>
            <Link to="/about">
              <h5>About Us</h5>
            </Link>
            <Link to="/">
              <h5>Our Services</h5>
            </Link>
            <h5>Student Register</h5>
            <Link to="/contact">
              <h5>Contact Us</h5>
            </Link>
            <Link to="/privacy">
              <h5>Privacy Policy</h5>
            </Link>
            <Link to="/terms&conditions">
              <h5>Terms & Conditions</h5>
            </Link>
          </div>
        </div>
      </div>
      <hr className="footer__hr" />
      <div className="footer__copyright container">
        <div className="footer__copyright-left">
          <p>
            Copyright: All rights reserved 2021,{" "}
            <a
              href="https://oxeads.tk"
              style={{ color: "lightgray" }}
              target="_blank"
              rel="noreferrer"
            >
              Oxe Ads
            </a>
          </p>
        </div>
        {/* <div className="footer__copyright-right">
          <div className="scrolltotop" onClick={scrollup}>
            <ArrowUpwardIcon />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
