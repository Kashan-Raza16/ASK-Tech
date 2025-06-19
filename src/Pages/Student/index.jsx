import React from "react";
import StudentNav from "./StudentNav";
import StudentHero from "./StudentHero";
import DeliciouslySimpleSection from "./DeliciouslySimpleSection";
import ProjectCard from "./ProjectCard";
import FandQ from "./F&Q";
import Call from "./Call";
import Error from "../../UX/Error";

const index = () => {
  return (
    <>
      {/* <StudentNav /> */}
      <StudentHero />
      <DeliciouslySimpleSection />
      <ProjectCard />
      <Call />
      <FandQ />
      <Error />
    </>
  );
};

export default index;
