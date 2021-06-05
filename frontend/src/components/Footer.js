import React from "react";
import "./Footer.css";
import LOGO from "./images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="footer__first col-md-4 p-5">
            <img src={LOGO} alt="" />
            <p>
              MK Tower <br /> Dr Ambedkar Women's College - <br /> Building
              679303 Pattambi
            </p>
            <p>+91 75598 80999</p>
            <p>info.operainternational@gmail.com</p>
          </div>
          <div className="footer__second col-md-4 p-5">
            <h1>Services</h1>
            <h5>Financial Aid</h5>
            <h5>Secure Service</h5>
            <h5>Internet Service</h5>
            <h5>Housing</h5>
            <h5>Information Technologies</h5>
            <h5>Student Life</h5>
          </div>
          <div className="footer__third col-md-4 p-5">
            <h1>Quick Links</h1>
            <h5>About Us</h5>
            <h5>Our Services</h5>
            <h5>Student Register</h5>
            <h5>Contact Us</h5>
            <h5>Terms & Conditions</h5>
            <h5>FAQ</h5>
          </div>
        </div>
      </div>
      <hr className="footer__hr" />
      <div className="footer__copyright container">
        <p>Copyright: All rights reserved 2021, OXE ADS</p>
      </div>
    </div>
  );
};

export default Footer;
