import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { updateUser } from "../../actions/userActions";
import "./User.css";
import { createOrUpdateUser } from "../../functions/auth";
import { getFiles } from "../../actions/fileActions";
import UserIMG from "../../components/images/about.png";

const UserLandingPage = () => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getFiles());
  }, []);

  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  var currentId = user._id;

  // const paymentDoneCheck = () => {
  //   files.filter((file) => {
  //     // console.log("found him>>>>", file.user === user._id);
  //     if (file.user === user._id && file.paided) {
  //       setPaymentDone(true);
  //       console.log("paid", paymentDone);
  //     }
  //   });
  // };
  const logout = () => {
    firebase.auth().signOut();
    localStorage.removeItem("userInfo");
    localStorage.removeItem("user-info");
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
  const handleClick = () => {
    if (files.length === 0) {
      history.push("/upload");
    }
    history.push("/user/status");
  };

  const handleNameUpdate = (e) => {
    e.preventDefault();

    createOrUpdateUser(user.token)
      .then((res) => {
        const { data } = res;
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch({
          type: "LOGGEED_IN_USER",
          payload: {
            ...user,
            name: fullName,
          },
        });
        dispatch(updateUser(currentId, { ...user, name: fullName }));
        setFullName("");
      })
      .catch((err) => console.log(err));

    // history.push("/");

    // e.preventDefault();
    // console.log("check.....>>>");
    // if (currentId) {
    //   dispatch(updateUser(currentId, { ...user, name: fullName }));
    //   console.log("updated.....>>>");
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setLoading(false);
        setPassword("");
        toast.success("Password succesfully updated");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mb-5 user__profile-content">
          {/* <h1 className="login__user">User Profile</h1> */}
          {/* <h3>{user.email}</h3> */}
          <div
            className="user__profile status__h1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {user.role === "admin" && <h2>Admin</h2>}

            {user.name && <h1 className="status__h1">Hello, {user.name}</h1>}
            {/* {user.picture && (
          <img src={user.picture} style={{ borderRadius: "999px" }} alt="U" />
        )} */}
          </div>
          <div className="user__status-button">
            <button onClick={handleClick} className="register__button mb-5">
              Application Status
            </button>
          </div>
          <div className="container">
            {!user.name && (
              <div className="user__nameUpdate">
                <h1 className="status__h1">Update Full Name</h1>
                <h6>Update your full name before submitting the documents</h6>
                <form onSubmit={handleNameUpdate}>
                  <input
                    type="text"
                    required
                    onChange={(e) => setFullName(e.target.value)}
                    className="register__mail"
                    value={fullName}
                    placeholder="Enter your Name"
                    // disabled={loading}
                  />
                  <br />
                  <input
                    type="submit"
                    className="register__button mb-5"
                    // disabled={!password || password.length < 6 || loading}
                    value="submit"
                  />
                </form>
              </div>
            )}
            {loading ? (
              <h2 className="text-danger"> Loading...</h2>
            ) : (
              <h2 className="status__h1">Update Password</h2>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="register__mail"
                  value={password}
                  placeholder="Enter new Password"
                  disabled={loading}
                />{" "}
                <br />
                <button
                  type="submit"
                  className="register__button"
                  disabled={!password || password.length < 6 || loading}
                >
                  Submit
                </button>
                <br />
                <button className="logout__button" onClick={logout}>
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 user__statusImg-container">
          <img src={UserIMG} alt="" className="user__statusImg" />
        </div>
      </div>
    </div>
  );
};

export default UserLandingPage;
