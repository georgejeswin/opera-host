import React from "react";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Documentation from "./Documentation";
import Landing from "./Landing";
import Services from "./Services";
import Study from "./Study";

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Study />
      <Services />
      <Courses />
      <Documentation />
      <Contact />
    </>
  );
};

export default Home;
