import { View, Text, StyleSheet, Pressable, useWindowDimensions, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [tema, setTema] = useState('light');
  const [takip, setTakip] = useState(false);
  const [genislet, setGenislet] = useState(false);

  const aktifTema = COLORS[tema];
  const { width } = useWindowDimensions();
  const genisEkranMi = width > 500;

  const animDeger = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animDeger, {
      toValue: genislet ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [genislet, animDeger]);

  const temaDegistir = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  const genisAlanStil = {
    opacity: animDeger,
    maxHeight: animDeger.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 220],
    }),
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

      <Pressable
        onPress={() => setGenislet(!genislet)}
        style={({ pressed }) => [
          styles.cardPressable,
          pressed && { transform: [{ scale: 0.98 }] },
        ]}
      >
        <Animated.View
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

          <Animated.View style={[styles.expandableArea, genisAlanStil]}>
            <View style={styles.locationContainer}>
              <Ionicons name="location-sharp" size={18} color={aktifTema.text} />
              <Text style={[styles.locationText, { color: aktifTema.text }]}>
                İstanbul, Türkiye
              </Text>
            </View>

            <Text style={[styles.bioText, { color: aktifTema.text }]}>
              Mobil geliştirme ve tasarım ile ilgilenen bir yazılım meraklısı.
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

            <Pressable
              onPress={() => setTakip(!takip)}
              style={[
                styles.followButton,
                { backgroundColor: takip ? '#4CC9F0' : '#4361EE' },
              ]}
            >
              <Text style={styles.followText}>
                {takip ? 'Takip Ediliyor' : 'Takip Et'}
              </Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
      </Pressable>
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
  cardPressable: {
    borderRadius: RADII.md,
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
  expandableArea: {
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  locationText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginLeft: 4,
    opacity: 0.8,
  },
  bioText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginTop: SPACING.md,
    textAlign: 'center',
    opacity: 0.8,
    paddingHorizontal: 10,
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
  followButton: {
    marginTop: SPACING.md,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
    alignItems: 'center',
  },
  followText: {
    color: '#fff',
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
});
