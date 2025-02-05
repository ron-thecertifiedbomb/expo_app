import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, Suspense, useState } from "react";
import "react-native-reanimated";
import React from "react";
import { Slot } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native"; // Import UI components for fallback
import useDetectDeviceAndNavigate from "@/helper.tsx/utilities"; // Import the navigation hook

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "FS Albert-Bold": require("../assets/fonts/FSAlbert-Bold.otf"),
    "FS Albert-ExtraBold": require("../assets/fonts/FSAlbert-ExtraBold.otf"),
    "FS Albert-Regular": require("../assets/fonts/FSAlbert-Regular.otf"),
    "FS Albert-Light": require("../assets/fonts/FSAlbert-Light.otf"),
  });

  // State to ensure navigation happens after the layout is mounted
  const [isMounted, setIsMounted] = useState(false);

  // This effect will ensure the app fully mounts before handling routing
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setIsMounted(true); // Mark as mounted once fonts are loaded
    }
  }, [loaded]);

  // Fallback UI: a loading spinner while fonts load
  const FallbackUI = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading...</Text>
    </View>
  );

  // If fonts aren't loaded yet, display fallback UI with Suspense
  if (!loaded) {
    return <FallbackUI />;
  }

  // Once fonts are loaded, show the main content
  return (
    <Suspense fallback={<FallbackUI />}>
      <Slot />
      {/* The fallback UI will be shown here while waiting for fonts */}
    </Suspense>
  );
}
