import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View, StyleSheet} from "react-native"; // Import Button

import { fonts } from "@/constants/Fonts";

export default function WebHome() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const combinedTheme = {
    ...currentTheme,
    fonts,
  };


  return (
    <ThemeProvider value={combinedTheme}>
      <View style={styles.container}>
        <Text style={styles.heading1}>App Index</Text>
      </View>
    </ThemeProvider>
  );
}

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center", // Center align items
    justifyContent: "center",
  },
  heading1: {
    fontSize: fonts.heading.h1.fontSize,
    fontFamily: fonts.heading.h1.fontFamily,
    lineHeight: fonts.heading.h1.lineHeight, // Ensure this is a number
    marginBottom: 20, // Space between heading and button
  },
});
