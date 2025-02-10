import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Cards from "@/components/shared/Card";
import { IconType } from "@/interfaces/types";

interface CardItem {
  iconName: string;
  iconType: IconType;
  iconLabel: string;
}

interface ListRenderedProps {
  data: CardItem[];
  onPressItem?: (item: CardItem) => void;
}

const ListRendered: React.FC<ListRenderedProps> = ({ data, onPressItem }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${item.iconName}-${index}`}
      numColumns={2} // Set the number of columns to 2
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <Cards card={item} onPress={() => onPressItem?.(item)} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 8,  // Adjust the margin between cards
  },
});

export default ListRendered;
