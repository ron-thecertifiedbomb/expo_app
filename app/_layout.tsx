import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import App from "./app";
import React from "react";

SplashScreen.preventAutoHideAsync();

export default function LoadingComponent() {
  
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

  if (!loaded) {
    return null;
  }

  return <App />;
}
