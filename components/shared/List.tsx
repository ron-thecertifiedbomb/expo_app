import React from "react";
import { FlatList, View, StyleSheet, ViewStyle } from "react-native";
import { IconType } from "@/interfaces/types";

// Define a more specific item type with required properties
interface ListItem {
  iconName: string;
  iconType: IconType;
  iconLabel: string;
}

interface ListRenderedProps {
  data: ListItem[]; // Expecting ListItem type array
  onPressItem?: (item: ListItem) => void; // Optional onPressItem function
  Component: React.ComponentType<{
    item: ListItem;
    onPress: () => void;
    iconColor?: string;
    labelColor?: string;
    customStyle?: ViewStyle;
    size?: number;
  }>;
  iconColor?: string; // Color for the icon
  labelColor?: string; // Color for the label
  customStyle?: ViewStyle; // Custom style for the card container
  componentContainerStyle?: ViewStyle; // Custom style for the component container
  parentContainerStyle?: ViewStyle; // Custom style for the parent container of the list
  size?: number;
}

const List: React.FC<ListRenderedProps> = ({
  data,
  onPressItem,
  Component,
  iconColor,
  labelColor,
  customStyle,
  componentContainerStyle, // Receive componentContainerStyle prop
  parentContainerStyle, // Receive parentContainerStyle prop
  size,
}) => {
  return (
    <View style={[styles.parentContainer, parentContainerStyle]}>
      <FlatList
        data={data}
        keyExtractor={(item, index) =>
          `${item.iconName || item.iconLabel}-${index}`
        }
        numColumns={2}
        renderItem={({ item }) => (
          <View style={[styles.componentContainer, componentContainerStyle]}>
            <Component
              item={item} // Pass the item to the component
              onPress={() => onPressItem?.(item)} // Pass onPress function to the component
              iconColor={iconColor} // Pass iconColor prop
              labelColor={labelColor} // Pass labelColor prop
              size={size}
              customStyle={customStyle}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1, // Ensure the parent container takes up available space
    padding: 16, // Optional padding for the parent container
  },
  componentContainer: {
    margin: 8, // Adjust margin between components
  },
});

export default List;
