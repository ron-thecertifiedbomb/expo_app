import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

interface LoadingComponentProps {
  loading: boolean;
  error: string | null;
  productsAvailable: boolean; // Keep this as boolean
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  loading,
  error,
  productsAvailable,
}) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!productsAvailable) {
    return (
      <View style={styles.container}>
        <Text>No products available.</Text>
      </View>
    );
  }

  return null; // Return null if no loading, error, or no products state
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingComponent;
