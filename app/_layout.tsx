import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, Suspense } from "react";
import "react-native-reanimated";
import React from "react";
import { Slot } from "expo-router";
import { View, Text } from "react-native"; // Import UI components for fallback

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "FS Albert-Bold": require("../assets/fonts/FSAlbert-Bold.otf"),
    "FS Albert-ExtraBold": require("../assets/fonts/FSAlbert-ExtraBold.otf"),
    "FS Albert-Regular": require("../assets/fonts/FSAlbert-Regular.otf"),
    "FS Albert-Light": require("../assets/fonts/FSAlbert-Light.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Fallback UI: a loading spinner while fonts load
  const FallbackUI = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading...</Text>
    </View>
  );

  if (!loaded) {
    return <FallbackUI />;
  }

  return (
    <Suspense fallback={<FallbackUI />}>
      <Slot />
    </Suspense>
  );
}
