import { View, Text, StyleSheet, Pressable, useWindowDimensions, FlatList, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

const PROFILE_DATA = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    role: 'Mobil Geliştirici',
    location: 'İstanbul, Türkiye',
    bio: 'Mobil geliştirme ve tasarım ile ilgilenen bir yazılım meraklısı.',
  },
  {
    id: '2',
    name: 'Ayşe Demir',
    role: 'UI/UX Tasarımcısı',
    location: 'Ankara, Türkiye',
    bio: 'Kullanıcı odaklı arayüzler ve deneyimler tasarlamayı sever.',
  },
  {
    id: '3',
    name: 'Mehmet Kaya',
    role: 'Backend Geliştirici',
    location: 'İzmir, Türkiye',
    bio: 'Node.js ve bulut teknolojileri ile ölçeklenebilir API’ler geliştirir.',
  },
];

function ProfileCard({ tema, genisEkranMi, profil }) {
  const [takip, setTakip] = useState(false);
  const [genislet, setGenislet] = useState(false);

  const aktifTema = COLORS[tema];
  const animDeger = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animDeger, {
      toValue: genislet ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [genislet, animDeger]);

  const genisAlanStil = {
    opacity: animDeger,
    maxHeight: animDeger.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 220],
    }),
  };

  return (
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
          {profil.name}
        </Text>

        <Text style={[styles.role, { color: aktifTema.text }]}>
          {profil.role}
        </Text>

        <Animated.View style={[styles.expandableArea, genisAlanStil]}>
          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={18} color={aktifTema.text} />
            <Text style={[styles.locationText, { color: aktifTema.text }]}>
              {profil.location}
            </Text>
          </View>

          <Text style={[styles.bioText, { color: aktifTema.text }]}>
            {profil.bio}
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.likeButton,
              { backgroundColor: pressed ? '#e63946' : '#ff6b6b' },
            ]}
            onPress={() => console.log(`Profil beğenildi: ${profil.name}`)}
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
  );
}

export default function ProfileScreen() {
  const [tema, setTema] = useState('light');
  const { width } = useWindowDimensions();
  const genisEkranMi = width > 500;
  const aktifTema = COLORS[tema];

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

      <FlatList
        data={PROFILE_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ProfileCard tema={tema} genisEkranMi={genisEkranMi} profil={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.bg,
  },
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: SPACING.sm,
    zIndex: 1,
  },
  listContent: {
    paddingTop: 100,
    paddingBottom: SPACING.xl,
    alignItems: 'center',
  },
  cardPressable: {
    borderRadius: RADII.md,
    marginVertical: SPACING.lg,
  },
  card: {
    borderRadius: RADII.md,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: SPACING.sm,
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
