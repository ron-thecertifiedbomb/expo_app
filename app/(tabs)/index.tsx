import React from "react";
import { View, StyleSheet } from "react-native";
import ImageComponent from "@/components/ImageComponent"; // Adjust the import path accordingly

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageComponent
        source={require("@/assets/images/react.png")}
        containerStyle={styles.imageContainer}
      />
    </View>
  );
};

export default HomeScreen;

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
});
