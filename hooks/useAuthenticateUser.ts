import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { User } from "@/components/login/types";


const authenticateUser = async (data: User): Promise<any> => {
  const response = await fetch(
    "https://nextjs-server-rho.vercel.app/api/users/authenticate/route",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Failed to authenticate");
  }

  return response.json();
};

export const useAuthenticateUser = () => {
  const navigation = useNavigation();
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: authenticateUser,
    onSuccess: () => {
      Alert.alert("Success", "Authentication successful", [
        {
          text: "OK",
          onPress: () => navigation.navigate("DrawerNavigator" as never),
        },
      ]);
    },
    onError: (error: Error) => {
      console.error("Login Error:", error);
      setError(error.message || "An error occurred during login.");
    },
  });

  return { mutate: mutation.mutate, error, isLoading: mutation.isPending };
};
