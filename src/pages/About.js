import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1> A propos </h1>

      <div>
        <p>Pages permettant de découvrir l'ensemble des drapeaux du monde :)</p>
      </div>
    </div>
  );
};

export default About;
