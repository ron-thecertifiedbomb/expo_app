import React, { useEffect } from "react";
import { Redirect } from "expo-router"; // Import Redirect from expo-router
import { Platform } from "react-native";

export default function RootIndex() {
  if (Platform.OS === "web") {
    // Redirect to the web route
    return <Redirect href="/(web)/home"/>;
  } else {
    // Redirect to the mobile route
    return <Redirect href="/(app)/"/>;
  }
}
