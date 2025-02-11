import React from "react";
import { StyleSheet, Pressable, ViewStyle, View } from "react-native";
import Icon from "./Icon";
import Label from "./Label";
import { IconType } from "@/interfaces/types";
import Container from "./Container";

// Update interface to accept either a single item or an array of items
interface CardProps {
  item:
    | {
        // Change from 'card' to 'item'
        iconName: string;
        iconType: IconType;
        iconLabel: string;
        size?: number;
        route?: string
      }
    | Array<{
        iconName: string;
        iconType: IconType;
        iconLabel: string;
        size?: number;
        route?: string
      }>; // Accepts an array of objects
  onPress: () => void;
  iconColor?: string; // Separate iconColor prop
  labelColor?: string; // Separate labelColor prop
  customCardContainerStyle?: ViewStyle;

}

const Cards: React.FC<CardProps> = ({
  item,
  onPress,
  iconColor = "grey", // Default icon color
  labelColor = "black", // Default label color
  customCardContainerStyle,
}) => {
  // Check if 'item' is an array or a single object and render accordingly
  const renderItems = Array.isArray(item) ? item : [item]; // Ensure item is always an array

  return (
    <>
      {renderItems.map((currentItem, index) => (
        <Pressable
          key={index}
          onPress={onPress}
          style={({ pressed }) => [
            styles.container,
            pressed && styles.pressed,
            customCardContainerStyle,
          ]}
        >
          <Icon
            name={currentItem.iconName}
            size={currentItem.size}
            color={iconColor}
            type={currentItem.iconType}
          />
          <Label lightColor={labelColor} text={currentItem.iconLabel} />
        </Pressable>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally

  },
  pressed: {
    opacity: 0.9,
  },
  labelContent: {
    marginTop: 10,
    alignItems: "center", // Ensure label is centered
  },
});

export default Cards;
