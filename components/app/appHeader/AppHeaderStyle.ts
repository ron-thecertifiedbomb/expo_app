import { TextStyle, ViewStyle } from "react-native";

interface appHeaderStyles {
  content: ViewStyle;
  textStyle: TextStyle;
}

export const appHeaderStyles = (): appHeaderStyles => {
  return {
    content: {
      backgroundColor: 'rgba(255, 255, 0, 0.0)',
      width: '100%',  // Full width
      flex: 1,         // Ensures the container fills available space
      justifyContent: 'center', // Centers content vertically
      alignItems: 'center', // Centers content horizontally
    },
    textStyle: {
      fontSize: 24,   // Set font size
      fontWeight: 'bold', // Set font weight
      color: 'black',  // Text color
      textAlign: 'center', // Center the text
    },
  };
};
