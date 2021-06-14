import React, { useEffect, useState } from "react";
import MessageIcon from "@material-ui/icons/Message";
import { Link } from "react-router-dom";
// import firebase from "firebase";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import "./Header.css";
import LOGO from "../images/logo.png";
import { Avatar, IconButton } from "@material-ui/core";

// const { SubMenu } = Menu;
// const { Item } = Menu;

const Header = () => {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const handleMobClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 980) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, [button]);
  window.addEventListener("resize", showButton);

  let { user } = useSelector((state) => ({ ...state }));

  return (
    <nav className="nav sticky-top header__nav">
      <div className="nav-container">
        <div className="navMobile">
          <Link to="/" className="navLogo" onClick={closeMobileMenu}>
            <img alt="logo" src={LOGO} />
          </Link>
          <div className="menu-icon" onClick={handleMobClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/study-in"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Study In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          {/* {user && (
            <> */}
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          {/* </>
          )} */}

          <li className="nav-item" onClick={closeMobileMenu}>
            {user ? (
              <Link to="/user" className="header__login">
                <div
                  className="nav-links"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar src={user?.picture} /> &nbsp;
                  {!user.picture && user.name}
                </div>
              </Link>
            ) : (
              <Link className="nav-links" to="/login">
                Login
              </Link>
            )}
          </li>
          {!user && (
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/register"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          )}
          {user && user.role === "admin" ? (
            <>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="/admin/messages">
                  <p className="nav-links">
                    <IconButton>
                      <MessageIcon />
                    </IconButton>
                  </p>
                </Link>
              </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="/admin/dashboard" className="header__login">
                  <p className="nav-links">Admin</p>
                </Link>
              </li>
            </>
          ) : (
            ""
          )}
          {/* {user && user.role === "admin" ? (
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/admin/dashboard" className="header__login">
                <p className="nav-links">Admin</p>
              </Link>
            </li>
          ) : (
            ""
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
