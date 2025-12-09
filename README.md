Furkan Sadık Kocabaş - 200404001
Bilgisayar Mühendisliği (Türkçe)

Profil Kartı Uygulaması – React Native (Expo)

Bu proje, React Native kullanılarak geliştirilmiş etkileşimli bir profil kartı uygulamasıdır. Uygulama; tema değiştirme, beğenme, takip etme, kart genişletme animasyonu ve birden fazla profil listeleme gibi özelliklere sahiptir. Hem temel React Native yapısını hem de bileşen mantığını öğrenmek amacıyla hazırlanmıştır.



Amaç

Bu uygulamanın temel amacı:

-React Native’de özel yazı tipi kullanımı,

-Tema yönetimi (Açık/Koyu mod),

-Stil yönetimi ve yeniden kullanılabilir tasarım değişkenleri oluşturma,

-Etkileşimli bileşen tasarımı (Pressable, animasyonlar),

-Liste yapıları (FlatList),

-Durum yönetimi (useState),

-Ekran boyutuna göre dinamik tasarım,

-gibi konuları pratik olarak uygulamalı şekilde öğrenmektir.



Uygulama Özellikleri
- 1. Özel Font Desteği

Uygulamada farklı metin stilleri için özel fontlar kullanılmıştır. Fontlar assets/fonts klasöründen yüklenmiştir.


- 2. Tema Sistemi (Açık/Koyu Mod)

Kullanıcı dilediği zaman uygulamanın temasını değiştirebilir.
Tema değişikliği renkler, arka plan ve kart tasarımlarını anında etkiler.


- 3. Profil Kartı Tasarımı

Her profil kartı aşağıdaki bilgileri içerir:

.Profil simgesi

.İsim

.Meslek

.Konum

.Biyografi

Kartlar gölgeli, yuvarlatılmış köşe yapısına sahip modern bir tasarımla hazırlanmıştır.


- 4. Beğen Butonu

Kart üzerinde bulunan “Beğen” butonuna basıldığında işlem kaydedilir.
Görsel geri bildirim için kalp ikonuyla birlikte renkli bir buton kullanılmıştır.


- 5. Takip Et / Takipten Çık

Kullanıcı her kartı bağımsız olarak takip edebilir veya takipten çıkabilir.
Butonun rengi ve yazısı duruma göre otomatik değişir.


- 6. Profil Kartı Genişletme

Kart üzerine tıklandığında:

.Biyografi

.Konum bilgisi

.Butonlar

gibi ek bilgiler kademeli bir animasyonla açılır.
Tekrar tıklandığında kart kapanır.


- 7. Animasyonlu Geçiş Efektleri

Profil kartının açılıp kapanması Animated.Value ile kontrollü şekilde animasyonlandırılmıştır.
Bu sayede uygulama daha akıcı ve profesyonel görünür.

- 8. Birden Fazla Profil Kartı (FlatList)

Uygulama birden fazla kullanıcı profilini destekler.
Tüm kartlar bağımsız çalışır ve kendi genişleme, takip, beğeni durumlarını yönetir.



Tema ve Stil Sistemi

Uygulamada tüm renkler, yazı tipleri, boşluk değerleri ve köşe yuvarlatma ölçüleri merkezi bir yapıdan yönetilir:

.COLORS

.FONTS

.SPACING

.RADII

Bu sayede tasarım hem düzenli hem de kolayca genişletilebilir hâle gelmiştir.



Uygulamadan Öğrenilen Başlıca Konular

-React Native bileşen yapısı

-Pressable ve dokunma etkileşimleri

-Animated API ile animasyon oluşturma

-useState ile bileşen içi durum yönetimi

-FlatList ile listeleme

Özel font ekleme ve kullanma

Tema yapısı oluşturma

Dinamik ekran ölçüleriyle responsive tasarım
