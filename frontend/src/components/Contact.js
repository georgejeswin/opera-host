import React, { useState } from "react";
import "./Contact.css";
import { useDispatch } from "react-redux";
import { createMessages } from "../actions/messageActions";
import { toast } from "react-toastify";

const Contact = () => {
  const dispatch = useDispatch();
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    // phone: "",
    message: "",
  });

  const clear = () => {
    toast.success("Message Sent successfully");
    setMessageData({
      name: "",
      email: "",
      // phone: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMessages(messageData));
    clear();
  };
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="contact__left col-md-6 p-5">
            <h1>Get in touch</h1>
            <p>
              We help you to plan your career according to the rapidly changing
              needs of the economy...
            </p>
            <p>
              Please fill out the quick form and we will be in touch with
              lightening speed
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={messageData.name}
                onChange={(e) =>
                  setMessageData({ ...messageData, name: e.target.value })
                }
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={messageData.email}
                onChange={(e) =>
                  setMessageData({ ...messageData, email: e.target.value })
                }
              />
              <textarea
                cols="30"
                required
                rows="10"
                placeholder="Message"
                value={messageData.message}
                onChange={(e) =>
                  setMessageData({ ...messageData, message: e.target.value })
                }
              />
              <input className="contact__button" type="submit" value="Submit" />
            </form>
          </div>
          <div className="contact__right col-md-6 p-5">
            <h1>Locate</h1>
            <h5>
              MK Tower Dr Ambedkar Women's College - <br /> Building 679303
              Pattambi
            </h5>{" "}
            <p>info.operainternational@gmail.com</p>
            <p>
              +91 75598 80999 <br />
              +91 75598 81999
            </p>
            <div className="contact__bottom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0715353986975!2d76.18950241487168!3d10.805833142301587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c5d0625dddbd%3A0xc542c333a022e8e4!2sOpera%20International!5e0!3m2!1sen!2sin!4v1621798533510!5m2!1sen!2sin"
                frameborder="0"
                width="380"
                title="opera"
                height="300"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
