import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Icon from "./Icon";
import Label from "./Label";
import { IconType } from "@/interfaces/types";

interface Card {
  iconName?: string; // Assuming single icon, use string instead of string[]
  iconType?: IconType;
  iconLabel?: string;
}

interface CardProps {
  card: Card;  // Singular for clarity
  onPress?: () => void;
}

const Cards: React.FC<CardProps> = ({ card, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      {card.iconName && (
        <Icon name={card.iconName} size={40} color="grey" type={card.iconType} />
      )}
      {card.iconLabel && (
        <Label lightColor="grey" text={card.iconLabel} />
      )}
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
