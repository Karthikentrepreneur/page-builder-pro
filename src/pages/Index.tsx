import React from "react";
import NewIndex from "./NewIndex";
import OldIndex from "./OldIndex";
import { useIsIndia } from "@/hooks/useIsIndia";

const Index: React.FC = () => {
  const isIndia = useIsIndia();

  // If visitor is from India: show India page
  // Otherwise: show Global ERP page
  if (isIndia === true) {
    return <NewIndex />;
  }

  return <OldIndex />;
};

export default Index;
