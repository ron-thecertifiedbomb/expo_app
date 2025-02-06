import Container from "@/components/shared/Container";
import Icon from "@/components/shared/Icon";
import Label from "@/components/shared/Label";
import { fonts } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

const Home = () => (
  <Container>
    <Icon name="home" size={40} color="grey" type="AntDesign" />
    <Label lightColor="grey" customTextStyle={styles.heading4} text="Home" />
  </Container>
);

const styles = StyleSheet.create({
  heading4: {
    fontSize: 22,
    fontFamily: "FS Albert-Regular",
    lineHeight: fonts.heading.h4.lineHeight,
  },
});

export default Home;
