import React from "react";
import Container from "@/components/shared/Container";
import Cards from "@/components/shared/Card";
import { StyleSheet, FlatList, View } from "react-native";
import { commonStyles } from "@/components/shared/commonStyles/CommonStyle";
import { content } from "@/mockData/cards/data"; // Your mock data for cards
import { IconType } from "@/interfaces/types";

const TopSection = () => {
  return (
    <>
      {/* FlatList to render multiple Cards horizontally */}
      <FlatList
        data={content}
        keyExtractor={(item, index) => index.toString()} // Use index as key if no unique id is available
        renderItem={({ item }) => (
          <Cards
            item={item} // Pass the current item in the iteration
            onPress={() => console.log(item.iconLabel)} // Logging the label on press
            customCardContainerStyle={styles.customCardContainerStyle}
          />
        )}
        horizontal={true} // Enables horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hides the scroll indicator
        contentContainerStyle={styles.flatListContent} // For inner content styling
      />
    </>
  );
};

const styles = StyleSheet.create({
  customCardContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 100,
    marginRight: 15, // Add margin to the right of each card for spacing
  },
  singleCardContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 300,
    height: 200,
    marginRight: 15, // Add margin to the right of each card for spacing
  },
  flatListContent: {
    paddingLeft: 5, // Adds padding on the left side of the list
    paddingRight: 5, // Adds padding on the right side of the list
  },
  container: {
    paddingTop: 20,
  },
});

export default TopSection;
