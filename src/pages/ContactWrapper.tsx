import React from "react";
import IndiaContact from "./Contact";
import GlobalContact from "./global/GlobalContact";
import { useIsIndia } from "@/hooks/useIsIndia";

const ContactWrapper: React.FC = () => {
  const isIndia = useIsIndia();

  // If detected as India, show India contact page
  if (isIndia === true) {
    return <IndiaContact />;
  }

  // Otherwise show Global ERP contact page
  return <GlobalContact />;
};

export default ContactWrapper;
