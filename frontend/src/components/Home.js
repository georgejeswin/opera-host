import React from "react";
import About from "./About";
import Contact from "./Contact";
import Documentation from "./Documentation";
import LandingPage from "./LandingPage";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <About />
      <Services />
      <Documentation />
      <Contact />
      
    </div>
  );
};

export default Home;
