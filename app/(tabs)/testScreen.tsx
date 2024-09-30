import { selectedProductsAtom } from "@/store/productsAtom";
import { useAtom } from "jotai";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TestScreen = () => {
  const [selectedProduct] = useAtom(selectedProductsAtom);

  // Destructure properties with defaults
  const {
    productName = 'Unknown Product',
    manufacturer = 'Unknown Manufacturer',
    price = 0,
    category = 'Uncategorized',
  } = selectedProduct || {}; // Use optional chaining to prevent errors

  console.log('Selected Product:', selectedProduct);

  return (
    <View style={styles.container}>
      {selectedProduct ? (
        <View>
          <View>
            <Text>Product Name: {productName}</Text>
          </View>
          <View>
            <Text>Manufacturer: {manufacturer}</Text>
          </View>
          <View>
            <Text>Price: ${price.toFixed(2)}</Text>
          </View>
          <View>
            <Text>Category: {category}</Text>
          </View>
        </View>
      ) : (
        <View>
          <Text>No product selected</Text> {/* Error message displayed here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TestScreen;
