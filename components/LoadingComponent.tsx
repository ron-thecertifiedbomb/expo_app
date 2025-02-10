import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const LoadingStatus = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFFF00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});

export default LoadingStatus;
