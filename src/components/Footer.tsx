import React from "react";
import GlobalFooter from "./site/Footer";
import { IndiaFooter } from "./india/IndiaFooter";
import { useRegion } from "@/contexts/RegionContext";

export const Footer: React.FC = () => {
  const { isIndia } = useRegion();
  return isIndia ? <IndiaFooter /> : <GlobalFooter />;
};

export default Footer;
