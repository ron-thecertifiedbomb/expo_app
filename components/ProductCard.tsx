import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

interface Product {
  imageUrls?: string[];
  productName?: string;
  manufacturer?: string;
  price?: number;
  category?: string;
}

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const {
    imageUrls = [],
    productName = "Unknown Product",
    manufacturer = "Unknown Manufacturer",
    price = 0,
    category = "Uncategorized",
  } = product;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.productItem, pressed && styles.pressed]}
    >
      {imageUrls.length > 0 ? (
        <Image
          source={{ uri: imageUrls[0] }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholderImage} />
      )}
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.manufacturer}>{manufacturer}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.category}>{category}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  productItem: {
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
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  placeholderImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  manufacturer: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: "#95a5a6",
  },
});

export default ProductCard;
