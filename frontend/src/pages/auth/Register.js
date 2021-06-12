import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import REGISTERIMG from "../../components/images/register.jpg";
import { Link } from "react-router-dom";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, config);

    toast.success(
      `Email is sent to ${email}. Click the link to complete the registration`
    );

    //save the email to local storage
    window.localStorage.setItem("emailForRegistration", email);

    //clear input field

    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        required
        className="register__mail"
        autoFocus
        value={email}
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="alreadyuser ">
        <Link to="/login" className="text-success ">
          Have an account ?
        </Link>
      </div>
      <button type="submit" className="register__button">
        Register
      </button>
    </form>
  );
  return (
    <div className="container-fluid register">
      <div className="row register__row">
        <div className="register__left container col-md-6">
          <h2 className="login__user">Sign Up</h2>
          {registerForm()}
        </div>
        <div className="col-md-6 register__right">
          <img src={REGISTERIMG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
