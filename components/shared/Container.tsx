import { View, StyleSheet, ViewProps } from "react-native";

export type ContainerProps = ViewProps & {
  backgroundColor?: string;
  padding?: number;
  customStyle?: object;
};

const Container: React.FC<ContainerProps> = ({
  customStyle,
  backgroundColor = "#fff",
  padding = 16,
  ...rest
}) => {
  return (
    <View
      style={[styles.container, { backgroundColor, padding }, customStyle]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Container;
