import React from "react";
import IndiaAbout from "./About";
import GlobalAbout from "./global/GlobalAbout";
import { useIsIndia } from "@/hooks/useIsIndia";

const AboutWrapper: React.FC = () => {
  const isIndia = useIsIndia();

  // If detected as India, show India about page
  if (isIndia === true) {
    return <IndiaAbout />;
  }

  // Otherwise show Global ERP about page
  return <GlobalAbout />;
};

export default AboutWrapper;
