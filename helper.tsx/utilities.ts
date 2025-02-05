import { useEffect } from "react";
import { Platform } from "react-native";
import { useRouter } from "expo-router";

const useDetectDeviceAndNavigate = () => {
  const router = useRouter();

  useEffect(() => {
    if (Platform.OS === "web") {
      router.replace("(web)/home"); // Navigate to the web layout
    } else {
      router.replace("(app)/home"); // Navigate to the mobile layout
    }
  }, [router]);

};

export default useDetectDeviceAndNavigate;
