import Container from "@/components/shared/Container";
import Icon from "@/components/shared/Icon";
import Label from "@/components/shared/Label";
import { fonts } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

const Settings = () => (
  <Container>
    <Icon name="settings-outline" size={41} color="grey" type="Ionicons" />
    <Label lightColor="grey" customTextStyle={styles.heading4} text="Settings" />
  </Container>
);

const styles = StyleSheet.create({
  heading4: {
    fontSize: 22,
    fontFamily: "FS Albert-Regular",
    lineHeight: fonts.heading.h4.lineHeight,
  },
});

export default Settings;
