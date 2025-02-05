import React, { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View, StyleSheet } from "react-native";
import { fonts } from "@/constants/Fonts";

export default function AppIndex() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const combinedTheme = {
    ...currentTheme,
    fonts,
  };

  return (
    <ThemeProvider value={combinedTheme}>
      <View style={styles.container}>
        <Text style={styles.heading4}>App View</Text>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
  },
  heading4: {
    fontSize: fonts.heading.h4.fontSize,
    fontFamily: fonts.heading.h4.fontFamily,
    lineHeight: fonts.heading.h4.lineHeight, // Ensure this is a number
  },
});