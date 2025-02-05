import React from "react";
import { View, StyleSheet, Image, ImageStyle, ViewStyle } from "react-native";

interface ImageComponentProps {
  source: any;
  style?: ImageStyle;
  containerStyle?: ViewStyle;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  source,
  style,
  containerStyle,
}) => {
  return (
    <View style={[styles.imageContainer, containerStyle]}>
      <Image
        source={source}
        style={[styles.image, style]}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
