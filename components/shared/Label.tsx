import {
  Text,
  type TextProps,
  StyleSheet,
  View,
  TextStyle,
  ViewStyle,
} from "react-native"; // Import TextStyle
import { useThemeColor } from "@/hooks/useThemeColor";

export type LabelProps = TextProps & {
  customTextStyle?: TextStyle;
  customTextContainerStyle?: ViewStyle; // Use TextStyle for custom text styles
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  text: string;
};

const Label: React.FC<LabelProps> = ({
  customTextStyle,
  customTextContainerStyle,
  lightColor,
  darkColor,
  type = "default",
  text,
  ...rest
}) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <View
      style={[
        styles.container,
        customTextContainerStyle, // Use TextStyle for custom text styles
        // custom text style applied here
        ,
      ]}
    >
      <Text
        style={[
          { color },
          type === "default" && styles.default,
          type === "title" && styles.title,
          type === "defaultSemiBold" && styles.defaultSemiBold,
          type === "subtitle" && styles.subtitle,
          type === "link" && styles.link,
          customTextStyle, // custom text style applied here
        ]}
        {...rest}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  container: {
    padding: 0,
  },

  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});

export default Label;
