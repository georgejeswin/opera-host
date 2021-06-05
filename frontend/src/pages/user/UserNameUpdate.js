import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/userActions";

const UserNameUpdate = () => {
  const user = useSelector((state) => ({ ...state.user }));
  console.log("landing page user", user);

  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();
  const currentId = user._id;

  const handleNameUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(currentId, { ...user, name: fullName }));
    console.log("submit>>>>>>>", user);
    setFullName("");
  };
  return (
    <div>
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
          className="register__button"
          // disabled={!password || password.length < 6 || loading}
          value="submit"
        />
      </form>
    </div>
  );
};

export default UserNameUpdate;
