import React, { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View, StyleSheet } from "react-native";
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
        <Text style={styles.heading1}>Web Home</Text>
      </View>
    </ThemeProvider>
  );
}

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  heading1: {
    fontSize: fonts.heading.h1.fontSize,
    fontFamily: fonts.heading.h1.fontFamily,
    lineHeight: fonts.heading.h1.lineHeight, // Ensure this is a number
  },
});
