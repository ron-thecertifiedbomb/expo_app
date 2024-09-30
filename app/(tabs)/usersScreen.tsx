import ProductCard from "@/components/ProductCard";
import SafeContainer from "@/components/SafeAreaViewContainer";
import { Product } from "@/interfaces/products/products";
import { allProductsAtom, selectedProductsAtom } from "@/store/productsAtom";
import { useAtom } from "jotai";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

const UsersScreen: React.FC = () => {
  const [allProducts] = useAtom(allProductsAtom);
  const productList = Array.isArray(allProducts) ? allProducts : [];

  const [ ,setSelectedProducts] = useAtom(selectedProductsAtom);

  const handlePress = (product: Product) => {
    setSelectedProducts(product); // Set array with only the pressed product
    console.log(`Pressed: ${product.productName}`);
  };
  const renderProductItem = ({ item }: { item: Product }) => (
    <ProductCard product={item} onPress={() => handlePress(item)} />
  );

  return (
    <SafeContainer style={styles.customContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={productList}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.productName}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeContainer>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  customContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
});
