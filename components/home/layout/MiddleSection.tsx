import React from "react";
import Container from "@/components/shared/Container";
import Cards from "@/components/shared/Card";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { content } from "@/mockData/cards/data";

const MiddleSection = () => {
  const router = useRouter();

  return (
    <Container style={styles.container}>
      {content.map((item) => (
        <Cards
          key={item.id}
          item={item}
          onPress={() => item.route && router.push(item.route)} // Avoid undefined errors
          customCardContainerStyle={styles.singleCardContainerStyle}
        />
      ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10, // Simplified padding
    gap: 10,
  },
  singleCardContainerStyle: {
    padding: 10,
    width: "100%",
    height: 200,
  },
});

export default MiddleSection;
