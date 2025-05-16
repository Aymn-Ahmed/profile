import React from "react";
import AboutMeMain from "../Combonents/aboutMeSection/AboutMeMain";
import ProjectMain from "../Combonents/ProjectsSection/ProjectMain";
import HeroSection from "../Combonents/Hero/HeroSection";
import SkillMatrix from "../Combonents/SkillsSection/SkillMatrix";
import ContactSection from "../Combonents/Contect/ContactSection";
import { Box } from "@mui/material";
import SkillsMain from "../Combonents/SkillsSection/SkillMatrix";
const Home = () => {
  return (
    <Box sx={
      {
        
        width: "70%",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        margin: "0 auto",
      }
    }>
      <HeroSection />

      <AboutMeMain />
      <ProjectMain />
      <SkillsMain />
      <ContactSection />
      
    </Box>
  );
};

export default Home;
