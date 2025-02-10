import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Container from "@/components/shared/Container";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import { Link, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  const goToProfile = () => {
    router.push("/profile");
  };

  return (
    <Container>
      <Pressable style={styles.button} onPress={goToProfile}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
