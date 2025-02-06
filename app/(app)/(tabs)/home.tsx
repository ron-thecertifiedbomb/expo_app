import { Label } from '@/components/shared/Label';
import { fonts } from '@/constants/Fonts';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => (
  <View style={styles.container}>
     <Label lightColor='grey' style={styles.heading4}>Home</Label>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading4: {
    fontSize: 22,
    fontFamily: fonts.heading.h4.fontFamily,
    lineHeight: fonts.heading.h4.lineHeight, 
  },
});

export default Home;
