// screens/ProfileScreen.js

import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [tema, setTema] = useState('light');   // şimdilik sadece light kullanıyoruz
  const aktifTema = COLORS[tema];

  return (
    <View style={[styles.container, { backgroundColor: aktifTema.bg }]}>
      <Text style={[styles.title, { color: aktifTema.text }]}>
        Profil Kartı
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
});
