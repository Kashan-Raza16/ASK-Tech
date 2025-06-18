import React from "react";
import StudentNav from "./StudentNav";
import StudentHero from "./StudentHero";
import DeliciouslySimpleSection from "./DeliciouslySimpleSection";
import ProjectCard from "./ProjectCard";
import FandQ from "../../../F&Q";

const index = () => {
  return (
    <>
      {/* <StudentNav /> */}
      <StudentHero />
      <DeliciouslySimpleSection />
      <ProjectCard />
      <FandQ />
    </>
  );
};

export default index;
