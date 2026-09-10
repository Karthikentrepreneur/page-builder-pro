import React from "react";
import GlobalHeader from "./site/Header";
import { IndiaHeader } from "./india/IndiaHeader";
import { useRegion } from "@/contexts/RegionContext";

export const Header: React.FC = () => {
  const { isIndia } = useRegion();
  return isIndia ? <IndiaHeader /> : <GlobalHeader />;
};

export default Header;
