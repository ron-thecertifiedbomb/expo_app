import React from "react";
import { Redirect } from "expo-router";
import { Platform } from "react-native";

export default function RootIndex() {
  if (Platform.OS === "web") {
    return <Redirect href="/(web)/home" />;
  } else {
    return <Redirect href='/(app)/'/>;
  }
}
