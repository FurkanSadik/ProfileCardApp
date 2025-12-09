// screens/ProfileScreen.js

import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [tema, setTema] = useState('light');
  const aktifTema = COLORS[tema];

  const { width } = useWindowDimensions();
  const genisEkranMi = width > 500; 

  const temaDegistir = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, { backgroundColor: aktifTema.bg }]}>
      <Pressable onPress={temaDegistir} style={styles.themeToggle}>
        <Ionicons
          name={tema === 'light' ? 'moon' : 'sunny'}
          size={28}
          color={aktifTema.text}
        />
      </Pressable>

      <View
        style={[
          styles.card,
          {
            backgroundColor: aktifTema.card,
            padding: genisEkranMi ? SPACING.xl : SPACING.lg,
            width: genisEkranMi ? '60%' : '85%',
          },
        ]}
      >
        <Ionicons
          name="person-circle-outline"
          size={genisEkranMi ? 100 : 80}
          color={aktifTema.text}
        />

        <Text style={[styles.name, { color: aktifTema.text }]}>
          Ahmet Yılmaz
        </Text>

        <Text style={[styles.role, { color: aktifTema.text }]}>
          Mobil Geliştirici
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.likeButton,
            { backgroundColor: pressed ? '#e63946' : '#ff6b6b' },
          ]}
          onPress={() => console.log('Profil beğenildi!')}
        >
          <Ionicons name="heart" size={24} color="#fff" />
          <Text style={styles.likeText}>Beğen</Text>
        </Pressable>
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
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: SPACING.sm,
  },
  card: {
    borderRadius: RADII.md,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

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
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
    marginTop: SPACING.md,
  },
  likeText: {
    color: '#fff',
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginLeft: SPACING.sm,
  },
});
