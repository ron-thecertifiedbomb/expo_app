import React from "react";
import { View } from "react-native";
import Label from "@/components/shared/Label";
import { appHeaderStyles } from "./AppHeaderStyle";


const AppHeader: React.FC = () => {

 const { container } = appHeaderStyles();
  return (
 
      <Label lightColor="black" text={"Welcone!"} />
 
  );
};

// Define styles using StyleSheet

export default AppHeader;
