// screens/ProfileScreen.js

import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [tema, setTema] = useState('light');   // şimdilik sadece açık tema
  const aktifTema = COLORS[tema];

  return (
    <View style={[styles.container, { backgroundColor: aktifTema.bg }]}>
      {/* Profil Kartı */}
      <View
        style={[
          styles.card,
          { backgroundColor: aktifTema.card }
        ]}
      >
        <Ionicons
          name="person-circle-outline"
          size={80}
          color={aktifTema.text}
        />

        <Text style={[styles.name, { color: aktifTema.text }]}>
          Ahmet Yılmaz
        </Text>

        <Text style={[styles.role, { color: aktifTema.text }]}>
          Mobil Geliştirici
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    borderRadius: RADII.md,
    alignItems: 'center',
    padding: SPACING.lg,

    // iOS gölgesi
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    // Android gölgesi
    elevation: 6,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginTop: SPACING.md,
  },
  role: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    marginTop: SPACING.sm,
    opacity: 0.7,
  },
});
