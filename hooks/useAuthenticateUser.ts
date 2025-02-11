import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router"; // Use this for web navigation
import { User } from "@/components/login/types";

const authenticateUser = async (data: User): Promise<any> => {
  const response = await fetch(
    "https://nextjs-server-rho.vercel.app/api/users/authenticate/route",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Failed to authenticate");
  }

  return response.json();
};

export const useAuthenticateUser = () => {
  const router = useRouter(); // Expo Router for web
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: authenticateUser,
    onSuccess: () => {
      const target = Platform.OS === "web" ? "/(web)/home" : "DrawerNavigator";

      if (Platform.OS === "web") {
        router.push("/(web)/home"); // This is the correct URL for web navigation
      } else {
        router.push("/(app)/(tabs)/home");
      }

      Alert.alert("Success", "Authentication successful");
    },
    onError: (error: Error) => {
      console.error("Login Error:", error);
      setError(error.message || "An error occurred during login.");
    },
  });

  return { mutate: mutation.mutate, error, isLoading: mutation.isPending };
};
