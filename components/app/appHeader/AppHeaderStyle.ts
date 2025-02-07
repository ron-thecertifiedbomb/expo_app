import { ViewStyle } from "react-native";

interface appHeaderStyles {
  container: ViewStyle;
}

export const appHeaderStyles = (): appHeaderStyles => {
  return {
    container: {
      backgroundColor: 'blue'
    },
  };
};
