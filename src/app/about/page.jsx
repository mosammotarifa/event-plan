import AboutHero from "@/component/AboutUs/AboutHero";
import MissionVision from "@/component/AboutUs/MissionVision";
import OurStory from "@/component/AboutUs/OurStory";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVision/>
    </main>
  );
};

export default AboutPage;
