import React from "react";
import { View, StyleSheet, Image } from "react-native";

const UsersScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/react.png")}
          style={styles.reactLogo}
        />
      </View>
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 100,
    width: 100,
  },

  reactLogo: {
    height: "100%",
    width: "100%",
  },
});
