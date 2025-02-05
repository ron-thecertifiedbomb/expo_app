import RoutingComponent from "@/components/RoutingComponent";
import { Slot } from "expo-router";
import React, { Suspense } from "react"; // Import Suspense
import { View } from "react-native";

// Fallback UI: A loading spinner or any other UI to show while content is loading

export default function AppLayout() {
  return <Slot />;
}
