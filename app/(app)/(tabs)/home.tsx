import Label from "@/components/shared/Label";
import { fonts } from "@/constants/Fonts";
import { View, StyleSheet } from "react-native";

const Home = () => (
  <View style={styles.container}>
   <Label lightColor="grey" style={styles.heading4} text="Home" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading4: {
    fontSize: 22,
    fontFamily: "FS Albert-Regular",
    lineHeight: fonts.heading.h4.lineHeight,
  },
});

export default Home;
