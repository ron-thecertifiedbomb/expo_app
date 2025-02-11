import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, ViewStyle } from "react-native";
import { ReactNode } from "react";

interface SafeContainerProps {
  children: ReactNode;
  style?: ViewStyle; // Allow custom styles for the inner View
}

const SafeContainer: React.FC<SafeContainerProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
  
    paddingHorizontal: 0, // Default margin
  },
});

export default SafeContainer;
