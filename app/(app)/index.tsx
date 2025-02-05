import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View, StyleSheet, Button } from "react-native"; // Import Button
import { useRouter } from "expo-router"; // Import useRouter hook
import { fonts } from "@/constants/Fonts";

export default function WebHome() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const combinedTheme = {
    ...currentTheme,
    fonts,
  };

  // Access the router

  return (
    <ThemeProvider value={combinedTheme}>
      <View style={styles.container}>
        <Text style={styles.heading1}>App Index app.tsx</Text>
  
   
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
