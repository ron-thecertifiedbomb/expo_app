import { Redirect, Stack } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  if (Platform.OS === "web") {
    return <Redirect href="/(web)/home" />; // Redirect to the web home screen
  } else {
    return (
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        {/* Mobile Screens (Tabs) */}
        <Stack.Screen
          name="(tabs)" // Ensure this is the correct screen name for the mobile tabs
          options={{
            headerShown: false,
          }}
        />
        {/* Profile Screen for Mobile */}
        <Stack.Screen
          name="profile" // Ensure this matches your profile screen route
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    );
  }
}
