import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, Suspense } from "react";
import "react-native-reanimated";
import React from "react";
import { Slot } from "expo-router";
import { View, Text } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme"; // Import UI components for fallback
import { fonts } from "@/constants/Fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const queryClient = new QueryClient();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "FS Albert-Bold": require("../assets/fonts/FSAlbert-Bold.otf"),
    "FS Albert-ExtraBold": require("../assets/fonts/FSAlbert-ExtraBold.otf"),
    "FS Albert-Regular": require("../assets/fonts/FSAlbert-Regular.otf"),
    "FS Albert-Light": require("../assets/fonts/FSAlbert-Light.otf"),
  });

  const colorScheme = useColorScheme();
  const currentTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const combinedTheme = {
    ...currentTheme,
    fonts,
  };

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
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={combinedTheme}>
          <Slot />
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
