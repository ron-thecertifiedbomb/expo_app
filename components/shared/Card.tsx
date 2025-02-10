import React from "react";
import { StyleSheet, Pressable, ViewStyle } from "react-native";
import Icon from "./Icon";
import Label from "./Label";
import { IconType } from "@/interfaces/types";

interface CardProps {
  item: { // Change from 'card' to 'item'
    iconName: string;
    iconType: IconType;
    iconLabel: string;
  };
  onPress: () => void;
  iconColor?: string; // Separate iconColor prop
  labelColor?: string; // Separate labelColor prop
  customStyle?: ViewStyle;
  size?: number;
}

const Cards: React.FC<CardProps> = ({
  item,
  onPress,
  iconColor = "grey", // Default icon color
  labelColor = "black", // Default label color
  customStyle,
  size = 40,
}) => {
  const { iconName, iconType, iconLabel } = item; // Destructure 'item' instead of 'card'

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && styles.pressed, customStyle]}>
      <Icon name={iconName} size={size} color={iconColor} type={iconType} />
      <Label lightColor={labelColor} text={iconLabel} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.9,
  },
});

export default Cards;
