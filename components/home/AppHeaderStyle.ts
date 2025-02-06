import { ViewStyle, TextStyle } from "react-native";

interface HeaderStyles {
  iconStyle: ViewStyle;
  subHeaderContainer: ViewStyle;
  textStyle: TextStyle;
}

export const headerStyles = (isMobile: boolean): HeaderStyles => {
  return {
    iconStyle: {
      opacity: isMobile ? 1 : 0,
    },
    subHeaderContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: isMobile ? "100%" : 1400, 
      margin: "auto",
      paddingTop: 0,
      paddingRight: 5,
      paddingBottom: 0,
      paddingLeft: 5,
    },
    textStyle: {
      fontSize: 22,
      fontFamily: "FS Albert-Regular",
    },
  };
};
 