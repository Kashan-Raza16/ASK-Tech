import React from "react";
import StudentNav from "./StudentNav";
import StudentHero from "./StudentHero";
import DeliciouslySimpleSection from "./DeliciouslySimpleSection";
import ProjectCard from "./ProjectCard";
import FandQ from "../../../F&Q";
import Call from "./Call";

const index = () => {
  return (
    <>
      {/* <StudentNav /> */}
      <StudentHero />
      <DeliciouslySimpleSection />
      <ProjectCard />
      <Call />
      <FandQ />
    </>
  );
};

export default index;
