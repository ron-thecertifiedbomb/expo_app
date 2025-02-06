import { Redirect, Stack } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  if (Platform.OS === "web") {
    return <Redirect href="/(web)/home" />;
  } else {
    return (
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    );
  }
}
