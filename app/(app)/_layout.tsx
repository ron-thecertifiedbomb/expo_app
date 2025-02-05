import { Slot, Redirect } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function AppLayout() {
  if (Platform.OS === "web") {
    return <Redirect href="/(web)/home" />;
  }

  return <Slot />;
}
