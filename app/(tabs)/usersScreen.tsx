import ImageComponent from "@/components/ImageComponent";
import { Product } from "@/interfaces/products/products";
import { allProductsAtom } from "@/store/productsAtom";
import { useAtom } from "jotai";
import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UsersScreen: React.FC = () => {
  const [allProducts] = useAtom(allProductsAtom);


  const productList = Array.isArray(allProducts) ? allProducts : [];

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <ImageComponent source={{ uri: item.imageUrls[0] }} style={styles.image} />
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.manufacturer}>{item.manufacturer}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}> 
      <FlatList
        data={productList} // Use the fallback array
        renderItem={renderProductItem}
        keyExtractor={(item) => item.productName}
        showsVerticalScrollIndicator={false} 
        showsHorizontalScrollIndicator={false} 
      />
      </View>
    </SafeAreaView>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: '100%', // Make it full width
    paddingHorizontal: 10, // Optional: add horizontal padding
  },
  productItem: {
    flex: 1, // Adjust the width percentage as needed
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: "center",

  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
  productName: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  manufacturer: {
    color: "#666",
  },
  price: {
    color: "#000",
    fontSize: 16,
    marginVertical: 5,
  },
  category: {
    color: "#007BFF",
  },
});
