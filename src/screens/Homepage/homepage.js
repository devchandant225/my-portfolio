import React, { useEffect, useState, useContext } from "react";
import {
  Education,
  Hireme,
  Infographics,
  LandingSection,
  Proficiency,
  Projects,
  Services,
  Techtools,
  TimelineInfographics,
} from "../../components";
import { themesupplier } from "../../contexts/themecontexts";
import Contactform from "../contactform/contactform";
const Homepage = () => {
  const [myTheme, setMytheme] = useState("");
  const { isDark } = useContext(themesupplier);
  useEffect(() => {
    const theme =
      localStorage.getItem("isDark") &&
      JSON.parse(localStorage.getItem("isDark"));
    setMytheme(theme);
  }, [isDark]);
  return (
    <div
      className={
        myTheme
          ? "bg-black transition-all duration-700"
          : "bg-white transition-all duration-700"
      }
    >
      <LandingSection />
      <div style={{ zIndex: "2" }} className="container mx-auto lg:px-0 px-4 ">
        <Services />
        <Projects />
        <Techtools />
        <Proficiency />
        {/* <Infographics /> */}
        <TimelineInfographics />
        <Hireme />
        <Education />
        <Contactform />
      </div>
    </div>
  );
};

export default Homepage;
