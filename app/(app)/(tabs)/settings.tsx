import { fonts } from '@/constants/Fonts';
import { View, Text, StyleSheet } from 'react-native';

const Settings = () => (
  <View style={styles.container}>
    <Text style={styles.heading4}>Settings</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading4: {
    fontSize: fonts.heading.h4.fontSize,
    fontFamily: fonts.heading.h4.fontFamily,
    lineHeight: fonts.heading.h4.lineHeight, // Ensure this is a number
  },
});

export default Settings;