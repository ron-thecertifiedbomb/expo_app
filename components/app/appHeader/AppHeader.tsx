import React from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import Label from "@/components/shared/Label";
import { appHeaderStyles } from "./AppHeaderStyle";
import Icon from "@/components/shared/Icon";

// Define the prop types for AppHeader
interface AppHeaderProps {
  text: string;
  containerStyle?: ViewStyle; // Optional style for the container
  customTextStyle?: TextStyle; // Optional style for the label
}

const AppHeader: React.FC<AppHeaderProps> = ({
  text,
  containerStyle,
  customTextStyle,
}) => {
  const { content } = appHeaderStyles();

  return (
    <>
      <View style={[content, containerStyle]}>
      <Icon name="arrow-left" color="black" type="Feather" />
        <Label
          lightColor="grey"
          text={text}
          style={customTextStyle} // Pass custom style to Label component
        />
      </View>
    </>
  );
};

export default AppHeader;
