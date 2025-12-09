// screens/ProfileScreen.js

import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [tema, setTema] = useState('light');
  const aktifTema = COLORS[tema];

  const temaDegistir = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, { backgroundColor: aktifTema.bg }]}>
      {/* Tema Değiştirme Butonu */}
      <Pressable onPress={temaDegistir} style={styles.themeToggle}>
        <Ionicons
          name={tema === 'light' ? 'moon' : 'sunny'}
          size={28}
          color={aktifTema.text}
        />
      </Pressable>

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

        {/* Beğen Butonu */}
        <Pressable
          style={({ pressed }) => [
            styles.likeButton,
            { backgroundColor: pressed ? '#e63946' : '#ff6b6b' }
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
