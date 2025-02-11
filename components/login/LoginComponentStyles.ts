import { ViewStyle } from "react-native";

interface LogInFormStyles {
  formContent: ViewStyle;
}

export const LogInFormStyles = (isMobile: boolean): LogInFormStyles => {
  return {
    formContent: {
      width: isMobile ? "100%" : 500,
      paddingLeft: 15,
      paddingRight: 15,
      alignSelf: "center",
      display: "flex",
      gap: 10,
    },
  };
};
