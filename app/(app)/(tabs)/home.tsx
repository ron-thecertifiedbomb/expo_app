import React from "react";
import { StyleSheet, Text } from "react-native";
import Container from "@/components/shared/Container";
import { content } from "@/mockData/cards/data"; // Example data
import List from "@/components/shared/List";
import Cards from "@/components/shared/Card"; // Example Card component

const Home = () => (
  <Container>
    <List
      data={content} // Your data
      onPressItem={(item) => console.log(item)} // Handle item press
      Component={Cards} // Pass Cards component as the prop
      customStyle={styles.container} // Pass custom styles for card container
    />
  </Container>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 120,
    margin: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

});

export default Home;
