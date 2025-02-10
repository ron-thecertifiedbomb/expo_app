import React, { useState } from "react";
import { Redirect } from "expo-router";
import { Platform, View, Text, Button, ActivityIndicator } from "react-native";
import { atom, useAtom } from "jotai"; // Using Jotai for state management
import { authAtom } from "./(app)/store";



export default function AppIndex() {
  const [isAuthenticated, setAuthenticated] = useAtom(authAtom);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Correctly use <Redirect /> inside render
  if (isAuthenticated) {
    const target =
      Platform.OS === "web" ? "/(web)/home" : "/(app)/(tabs)/home";
    return <Redirect href={target} />;
  }

  const handleLogin = () => {
    setIsLoading(true); // Show loading after clicking submit

    setTimeout(() => {
      setAuthenticated(true); // Simulate authentication success
    }, 1000); // Simulated delay for authentication
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
