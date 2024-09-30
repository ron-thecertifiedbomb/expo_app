import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View, StyleSheet } from 'react-native';
import { fonts } from '@/constants/Fonts';



export default function App() {
  
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const combinedTheme = {
    ...currentTheme,
    fonts,
  };

  return (
    <ThemeProvider value={combinedTheme}>
      <View>
        <Text style={styles.heading1}>Heading 1</Text>
        <Text style={styles.heading2}>Heading 2</Text>
        <Text style={styles.heading3}>Heading 3</Text>
        <Text style={styles.heading4}>Heading 4</Text>
      </View>
    </ThemeProvider>
  );
}

// Define styles using StyleSheet
const styles = StyleSheet.create({
  heading1: {
    fontSize: fonts.heading.h1.fontSize,
    fontFamily: fonts.heading.h1.fontFamily,
    lineHeight: fonts.heading.h1.lineHeight,// Ensure this is a number
  },
  heading2: {
    fontSize: fonts.heading.h2.fontSize,
    fontFamily: fonts.heading.h2.fontFamily,
    lineHeight: fonts.heading.h2.lineHeight,
    letterSpacing: fonts.heading.h2.letterSpacing,
  },
  heading3: {
    fontSize: fonts.heading.h3.fontSize,
    fontFamily: fonts.heading.h3.fontFamily,
    lineHeight: fonts.heading.h3.lineHeight,
    letterSpacing: fonts.heading.h3.letterSpacing,
  },
  heading4: {
    fontSize: fonts.heading.h4.fontSize,
    fontFamily: fonts.heading.h4.fontFamily,
    lineHeight: fonts.heading.h4.lineHeight,
    letterSpacing: fonts.heading.h4.letterSpacing,
  },
});
