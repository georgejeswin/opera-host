import React from "react";
import Contact from "../components/Contact";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="contactPage__top">
        <h3 className="top__h3">Contact Us</h3>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
