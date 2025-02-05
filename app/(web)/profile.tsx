import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View, StyleSheet, Button } from "react-native";
import { fonts } from "@/constants/Fonts";
import { Redirect, useRouter } from "expo-router";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const combinedTheme = {
    ...currentTheme,
    fonts,
  };
const router = useRouter();
  return (
    <ThemeProvider value={combinedTheme}>
      <View style={styles.container}>
        <Text style={styles.heading4}>Profile Screen</Text>
        <Button title="Go to Home" onPress={() => <Redirect href="/(web)/home"  />} />
      </View>
    </ThemeProvider>
  );
}

// Define styles using StyleSheet
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
