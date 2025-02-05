import { Slot } from "expo-router";
import React, { Suspense } from "react";  // Import Suspense
import { View, Text } from "react-native";

// Fallback UI: a loading spinner or any other UI to show while content is loading
const FallbackUI = () => (
  <View>
    <Text>Loading...</Text> {/* You can replace this with an actual spinner */}
  </View>
);

export default function WebLayout() {
  return (
    <Suspense fallback={<FallbackUI />}>
      <Slot />
    </Suspense>
  );
}
