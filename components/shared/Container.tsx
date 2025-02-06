import React from "react";
import { View, StyleSheet, ViewProps, ViewStyle } from "react-native";

export type ContainerProps = ViewProps & {
  backgroundColor?: string;
  padding?: number;
  customStyle?: ViewStyle;
  noFlex?: boolean; // Add this prop to conditionally exclude the default flex style
};

const Container: React.FC<ContainerProps> = ({
  customStyle,
  backgroundColor = "#fff",
  padding = 16,
  noFlex = false, // Default is false
  ...rest
}) => {
  // Conditionally include/exclude the flex style
  const containerStyle = [
    styles.defaultContainer,
    !noFlex && styles.flexStyle,
    { backgroundColor, padding },
    customStyle,
  ];

  return (
    <View style={containerStyle} {...rest}>
      {rest.children}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexStyle: {
    flex: 1,
  },
});

export default Container;
