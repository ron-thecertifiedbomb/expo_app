import { ViewStyle } from "react-native";

interface commonStyles {
  mainContainer: ViewStyle;
  container: ViewStyle; // Added content property type
}

export const commonStyles = (): commonStyles => {
  return {
    mainContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flexDirection: "row",
      paddingTop: 20,
    },
  };
};
