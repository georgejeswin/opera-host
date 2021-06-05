import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state);
  // console.log("user>>>>>aaa", user);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
