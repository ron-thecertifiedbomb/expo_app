import { TextStyle, ViewStyle } from "react-native";

interface appHeaderStyles {
  container: ViewStyle;
  textStyle: TextStyle;
}

export const appHeaderStyles = (): appHeaderStyles => {
  return {
    container: {
      backgroundColor: 'white',
      gap: 10, 
      flexDirection: 'row',
      padding: 10,
  alignItems: 'center',
    },
    textStyle: {
      fontSize: 24,   // Set font size
      fontWeight: 'bold', // Set font weight
      color: 'black',  // Text color
      textAlign: 'center', // Center the text
    },
  };
};
