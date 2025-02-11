import React from "react";
import Header from "@/components/app/Header/Header";

interface HeaderSectionProps {
  text: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ text }) => {
  return <Header text={text} />;
};

export default HeaderSection;
