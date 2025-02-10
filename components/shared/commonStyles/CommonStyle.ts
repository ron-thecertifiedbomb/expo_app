import { ViewStyle } from "react-native";

interface commonStyles {
  container: ViewStyle;
  content: ViewStyle; // Added content property type
}

export const commonStyles = (): commonStyles => {
  return {
    container: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      flex: 0, 
    },
  };
};
