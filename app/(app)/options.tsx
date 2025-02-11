import Header from "@/components/app/Header/Header";
import HeaderSection from "@/components/home/layout/HeaderSection";

import SafeContainer from "@/components/shared/SafeAreaViewContainer";
import { StyleSheet } from "react-native";

const OptionsScreen = () => (
  <SafeContainer style={styles.container}>
    <HeaderSection text="Options" />
  </SafeContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OptionsScreen;
