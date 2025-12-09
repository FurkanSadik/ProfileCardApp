import { useFonts } from 'expo-font';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Fontlar yüklenene kadar beklet
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fontlar başarıyla yüklendi!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'MontserratBold',
    fontSize: 24,
  },
});
