import React from "react";
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";

interface SafeContainerProps {
  children: React.ReactNode; // Accept children as a prop
  style?: ViewStyle; // Optional additional styles
}

const SafeContainer: React.FC<SafeContainerProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});

export default SafeContainer;
