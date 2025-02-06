import React from "react";
import { StyleSheet, View } from "react-native";
import { fonts } from "@/constants/Fonts";
import Container from "@/components/shared/Container";
import Label from "@/components/shared/Label";
import useIsMobile from "@/helper.tsx/useMoblie";

export default function WebHome() {
  
  const isMobile = useIsMobile(); // Call the hook to get the boolean value
  const text = isMobile ? "Mobile View" : "Desktop View";

  // Dynamically determine styles based on `isMobile`

  return (
    <Container>
      <Label lightColor="grey" customTextStyle={styles.heading4} text={text} />
    </Container>
  );
}

// Define styles using StyleSheet
const styles = StyleSheet.create({
  heading4: {
    fontSize: 22,
    fontFamily: "FS Albert-Regular",
    lineHeight: fonts.heading.h4.lineHeight,
  },
});
