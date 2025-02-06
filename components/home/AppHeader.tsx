import React from "react";
import { View } from "react-native";
import Label from "@/components/shared/Label";
import useIsMobile from "@/helper.tsx/useMoblie";
import Icon from "../shared/Icon";
import { headerStyles } from "./AppHeaderStyle";

const AppHeader: React.FC = () => {

  const isMobile = useIsMobile();
  const { textStyle, subHeaderContainer, iconStyle } = headerStyles(isMobile);

  return (
    <View style={subHeaderContainer}>
      <Label
        lightColor="grey"
        customTextStyle={textStyle}
        text={"Your-Icon"}
      />
      <View style={iconStyle}>
      <Icon name="navicon" size={40} color="grey" type="EvilIcons" />
      </View>
     
    </View>
  );
};

// Define styles using StyleSheet

export default AppHeader;
