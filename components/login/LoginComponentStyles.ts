import { ViewStyle } from "react-native";

interface LogInFormStyles {
  formContent: ViewStyle;
}

export const LogInFormStyles = (isMobile: boolean): LogInFormStyles => {
  return {
    formContent: {
      width: isMobile ? "100%" : 400,
      paddingLeft: 50,
      paddingRight: 50,
      alignSelf: "center",
      display: "flex",
      gap: 10,
    },
  };
};
