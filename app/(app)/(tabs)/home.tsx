import Cards from "@/components/shared/Card";
import Container from "@/components/shared/Container";
import Label from "@/components/shared/Label";
import { fonts } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

const Home = () => (
  <Container>
   <Cards card={{ iconName: "home", iconLabel: "Home", iconType: "AntDesign" }} />
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
