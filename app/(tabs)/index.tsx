import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageComponent from "@/components/ImageComponent";
import useGetAllProducts from "@/hooks/useGetAllProducts";
import { useAtom } from "jotai";
import { allProductsAtom } from "@/store/productsAtom";
import LoadingComponent from "@/components/LoadingComponent"; // Adjust the import path

const HomeScreen: React.FC = () => {
  const { loading, error } = useGetAllProducts();
  const [allProducts] = useAtom(allProductsAtom);

  const productsAvailable = Array.isArray(allProducts) && allProducts.length > 0;

  return (
    <View style={styles.container}>
      <LoadingComponent
        loading={loading}
        error={error}
        productsAvailable={productsAvailable} 
      />

      
      {/* <ImageComponent
        source={require("@/assets/images/react.png")}
        containerStyle={styles.imageContainer}
      /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
});

