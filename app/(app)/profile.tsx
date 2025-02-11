import HeaderSection from "@/components/home/layout/HeaderSection";
import Label from "@/components/shared/Label";
import SafeContainer from "@/components/shared/SafeAreaViewContainer";
import { StyleSheet } from "react-native";

const ProfileScreen = () => (
  <SafeContainer style={styles.container}>
    <HeaderSection text="Profile" />
  </SafeContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
