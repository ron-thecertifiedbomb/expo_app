import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  containerStyle?: ViewStyle;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  loading = false,
  containerStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        containerStyle,
        { backgroundColor: disabled || loading ? 'gray' : 'blue' }, // Apply disabled style
      ]}
      onPress={disabled || loading ? undefined : onPress} // Disable onPress if disabled or loading
      disabled={disabled || loading} // Prevent press interaction if disabled or loading
    >
      <Text style={styles.buttonText}>
        {loading ? <ActivityIndicator size="small" color="white" /> : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default CustomButton;
