import { TextStyle, ViewStyle } from "react-native";

interface appHeaderStyles {
  content: ViewStyle;
  textStyle: TextStyle;
}

export const appHeaderStyles = (): appHeaderStyles => {
  return {
    content: {
      backgroundColor: 'rgba(255, 255, 0, 0.0)',
      gap: 10, // Full width // Ensures the container fills available spa
      flexDirection: 'row',
    },
    textStyle: {
      fontSize: 24,   // Set font size
      fontWeight: 'bold', // Set font weight
      color: 'black',  // Text color
      textAlign: 'center', // Center the text
    },
  };
};
