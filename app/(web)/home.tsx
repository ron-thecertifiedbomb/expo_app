import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import {  StyleSheet } from "react-native";
import { fonts } from "@/constants/Fonts";
import Container from "@/components/shared/Container";
import Icon from "@/components/shared/Icon";
import Label from "@/components/shared/Label";




export default function WebHome() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const combinedTheme = {
    ...currentTheme,  
    fonts,
  };

  return (
    <ThemeProvider value={combinedTheme}>
    <Container style={styles.container}>
    <Label lightColor="grey" style={styles.heading4} text="Home Screen" />

  </Container>
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
    fontSize: 22,
    fontFamily: 'FS Albert-Regular',
    lineHeight: fonts.heading.h4.lineHeight, 
  },
});
