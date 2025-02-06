import React from "react";
import { View, StyleSheet, Image, ImageStyle, ViewStyle } from "react-native";

interface ImageContainerProps {
  source: any;
  style?: ImageStyle;
  containerStyle?: ViewStyle;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  source,
  style,
  containerStyle,
}) => {
  return (
    <View style={[styles.imageContainer, containerStyle]}>
      <Image
        source={source}
        style={[styles.imageStyle, style]}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
  },
});
