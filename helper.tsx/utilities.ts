import { useEffect } from "react";
import { Platform } from "react-native";
import { Redirect } from "expo-router"; // Import Redirect from expo-router

const useDetectDeviceAndNavigate = () => {
  if (Platform.OS === "web") {
    // Redirect to the web route
    return <Redirect href="/(web)/home" />;
  } else {
    // Redirect to the mobile route
    return <Redirect href="/(app)/home" />;
  }
};

export default useDetectDeviceAndNavigate;
