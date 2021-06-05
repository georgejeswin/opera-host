import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import UploadIMG from "../../components/images/upload-right.png";

const UserStatus = () => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const history = useHistory();

  useEffect(async () => {
    filesUploaded(user);
    if (files.length <= 0) {
      history.push("/user");
    }
  }, []);

  const [fileUploaded, setFileUploaded] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const filesUploaded = (currentuser) => {
    files.filter((file) => {
      if (file.user === currentuser._id) {
        setFileUploaded(true);
        if (file.paided === true) {
          setPaymentDone(true);
        } else {
          console.log("not paid");
        }
      }
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 user__status pt-5 pb-5">
          {fileUploaded ? (
            <div>
              <h1 className="status__h1">Files uploaded</h1>

              {paymentDone ? (
                <h1 className="status__h1">Payment Done</h1>
              ) : (
                <div>
                  <h1 className="status__h1">Payment not done</h1>
                  <Link to="/payments">
                    <button className="register__button">Pay Now</button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1 className="status__h1">Files Not Uploaded</h1>
              <Link to="/upload">
                <button className="register__button">Apply Now</button>
              </Link>
            </div>
          )}
        </div>
        <div className="col-md-6 user__statusImg-container">
          <img src={UploadIMG} alt="" className="user__statusImg" />
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
