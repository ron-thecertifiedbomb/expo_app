import React from "react";
import { TextStyle, View, ViewStyle, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import Label from "@/components/shared/Label";
import Icon from "@/components/shared/Icon";
import { appHeaderStyles } from "./HeaderStyle";



// Define the prop types for AppHeader
interface HeaderProps {
  text: string;
  containerStyle?: ViewStyle; // Optional style for the container
  customTextStyle?: TextStyle; // Optional style for the label
}

const Header: React.FC<HeaderProps> = ({
  text,
  containerStyle,
  customTextStyle,
}) => {
  const router = useRouter(); // Hook to handle navigation
  const { container } = appHeaderStyles(); // Ensure appHeaderStyles is an object

  return (
    <View style={[container, containerStyle]}>
      <TouchableOpacity onPress={() => router.back()}>
        <Icon name="arrow-left" size={24} color="black" type="Feather" />
      </TouchableOpacity>

      {/* Header Text */}
      <Label
        lightColor="grey"
        text={text}
        style={customTextStyle} // Pass custom style to Label component
      />
    </View>
  );
};

export default Header;
