<div align="center">

# 🛍️ ShopNow - E-Ticaret Mobil Uygulaması

**React Native, Redux ve Expo ile Geliştirilmiş Modern E-Ticaret Mobil Uygulaması**

[![React Native](https://img.shields.io/badge/React_Native-0.74.5-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51.0.28-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.2.7-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Native Paper](https://img.shields.io/badge/React_Native_Paper-5.12.5-6200EE?style=for-the-badge&logo=material-design&logoColor=white)](https://reactnativepaper.com/)

[📱 Demo](#-demo) • [📋 Özellikler](#-özellikler) • [🛠️ Teknolojiler](#️-teknolojiler) • [🚀 Kurulum](#-kurulum)

</div>

---

## 📖 Hakkında

**ShopNow**, modern mobil teknolojiler kullanılarak geliştirilmiş kapsamlı bir e-ticaret mobil uygulamasıdır. React Native, Redux Toolkit ve Expo ile oluşturulmuş olup, kullanıcılara güvenli, hızlı ve kullanıcı dostu alışveriş deneyimi sunmaktadır.

### 🎯 Projenin Amacı

- 🛒 **E-Ticaret Platformu** - Kapsamlı mobil alışveriş deneyimi
- 📱 **Cross-Platform** - iOS ve Android uyumlu native uygulama
- 🎨 **Modern UI/UX** - React Native Paper ile Material Design
- ⚡ **Hızlı Performans** - Redux Toolkit ile optimize edilmiş state management
- 🔄 **Offline Support** - AsyncStorage ile veri kalıcılığı
- 🛍️ **Sepet Sistemi** - Gelişmiş alışveriş sepeti yönetimi

---

## 🚀 Demo

**🔗 [Canlı Demo](https://your-demo-url.com)**

Uygulama şu anda geliştirme aşamasındadır. Demo linki yakında eklenecektir.

---

## 🚀 Kurulum

### Gereksinimler

- **Node.js** (v16 veya üzeri)
- **npm** veya **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Android Studio** (Android geliştirme için)
- **Xcode** (iOS geliştirme için - sadece macOS)

### Adım Adım Kurulum

1. **Depoyu klonlayın**
   ```bash
   git clone https://github.com/gezerm85/shopnow.git
   cd shopnow
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   ```

3. **Uygulamayı başlatın**
   ```bash
   # Expo ile çalıştır
   npx expo start
   
   # Android'de çalıştır
   npx expo run:android
   
   # iOS'ta çalıştır
   npx expo run:ios
   
   # Web'de çalıştır
   npx expo start --web
   ```

### Build Komutları

```bash
# Development
npm start

# Android build
npm run android

# iOS build
npm run ios

# Web build
npm run web
```

---

## 📋 Geliştirdiğim Özellikler

### 🏠 Ana Sayfa (HomeScreen.js)
- [x] **Ürün Listesi** - API'den dinamik ürün çekme
- [x] **Kategori Filtreleme** - Kategori bazlı ürün filtreleme
- [x] **Arama Fonksiyonu** - Gerçek zamanlı ürün arama
- [x] **Responsive Grid** - 2 sütunlu ürün grid layout
- [x] **Loading States** - Kullanıcı deneyimi için loading bileşenleri

### 🛒 Sepet Sistemi (BasketScreen.js)
- [x] **Sepet Yönetimi** - Ürün ekleme, çıkarma ve miktar değiştirme
- [x] **Toplam Hesaplama** - Otomatik fiyat hesaplama
- [x] **Sepet Badge** - Sepetteki ürün sayısı göstergesi
- [x] **Lottie Animasyonlar** - Başarılı alışveriş animasyonu
- [x] **AsyncStorage** - Sepet verilerini yerel depolama

### ❤️ Favori Sistemi (FavoriteScreen.js)
- [x] **Favori Ürünler** - Ürünleri favorilere ekleme/çıkarma
- [x] **Kalp İkonu** - Görsel favori durumu göstergesi
- [x] **Favori Listesi** - Favori ürünleri görüntüleme
- [x] **Persistent Storage** - Favori verilerini kalıcı depolama

### 🛍️ Ürün Yönetimi
- [x] **Ürün Kartları** - Detaylı ürün kartı tasarımı
- [x] **Yıldız Puanlama** - Ürün değerlendirme sistemi
- [x] **Ürün Detayları** - Detaylı ürün bilgi sayfası
- [x] **Görsel Optimizasyonu** - Optimize edilmiş ürün görselleri

### 🎨 UI/UX Geliştirmeleri
- [x] **Material Design** - React Native Paper ile modern tasarım
- [x] **Responsive Layout** - Tüm ekran boyutlarına uyumlu
- [x] **Smooth Animations** - Lottie ile animasyonlar
- [x] **Loading Components** - Kullanıcı dostu loading states
- [x] **Error Handling** - Kapsamlı hata yönetimi

### 🔧 Teknik Geliştirmeler
- [x] **Redux Toolkit** - Merkezi state management
- [x] **AsyncStorage** - Yerel veri depolama
- [x] **Navigation System** - React Navigation ile sayfa geçişleri
- [x] **API Integration** - Axios ile HTTP istekleri
- [x] **Performance Optimization** - Optimize edilmiş render

---

## 🛠️ Teknolojiler

### Frontend Framework
- **React Native** `0.74.5` - Cross-platform mobil uygulama
- **Expo** `51.0.28` - Geliştirme ortamı ve build sistemi
- **React Navigation** `6.x` - Navigasyon sistemi

### State Management
- **Redux Toolkit** `2.2.7` - Predictable state container
- **React Redux** `9.1.2` - React bindings for Redux

### UI & Styling
- **React Native Paper** `5.12.5` - Material Design components
- **React Native Vector Icons** `10.1.0` - Icon library
- **React Native Star Rating** `1.9.1` - Rating component

### Storage & Data
- **AsyncStorage** `1.23.1` - Local data storage
- **Axios** `1.7.7` - HTTP client

### Animation & Media
- **Lottie React Native** `6.7.0` - Animation library
- **React Native Reanimated** `3.10.1` - Advanced animations
- **React Native Gesture Handler** `2.16.1` - Touch gestures

### Development Tools
- **Expo Status Bar** `1.12.1` - Status bar management
- **Expo System UI** `3.0.7` - System UI management

---

## 📁 Proje Yapısı

```
shopnow/
├── src/
│   ├── components/        # Yeniden kullanılabilir bileşenler
│   │   ├── BasketBadge/   # Sepet badge bileşeni
│   │   │   └── BasketBadge.js
│   │   ├── BasketCard/    # Sepet kartı bileşeni
│   │   │   └── BasketCard.js
│   │   ├── Category/      # Kategori bileşeni
│   │   │   └── Category.js
│   │   ├── CustomSearch/  # Arama bileşeni
│   │   │   └── CustomSearch.js
│   │   ├── Error/         # Hata bileşeni
│   │   │   └── Error.js
│   │   ├── FavoritaCard/  # Favori kartı bileşeni
│   │   │   └── FavoritaCard.js
│   │   ├── Loading/       # Loading bileşeni
│   │   │   └── Loading.js
│   │   ├── ProductCard/   # Ürün kartı bileşeni
│   │   │   └── ProductCard.js
│   │   └── SendToCard/    # Sepete gönder bileşeni
│   │       └── SendToCard.js
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── BasketScreen/  # Sepet sayfası
│   │   │   └── BasketScreen.js
│   │   ├── DetailScreen/  # Ürün detay sayfası
│   │   │   └── DetailScreen.js
│   │   ├── FavoriteScreen/ # Favoriler sayfası
│   │   │   └── FavoriteScreen.js
│   │   └── HomeScreen/    # Ana sayfa
│   │       └── HomeScreen.js
│   ├── redux/             # Redux store
│   │   ├── mainSlice.js   # Ana slice
│   │   └── store.js       # Store yapılandırması
│   ├── Router/            # Navigasyon yapılandırması
│   │   ├── MainStack/     # Stack navigator
│   │   │   └── MainStack.js
│   │   ├── MainTabs/      # Tab navigator
│   │   │   └── MainTabs.js
│   │   └── Navigation/    # Ana navigasyon
│   │       └── Navigation.js
│   └── assets/            # Statik varlıklar
│       ├── images/        # Resim dosyaları
│       │   └── lottie/    # Lottie animasyonları
│       ├── icon.png       # Uygulama ikonu
│       └── splash.png     # Splash screen
├── App.js                 # Ana uygulama bileşeni
├── app.json              # Expo yapılandırması
└── package.json          # Proje bağımlılıkları
```

---

## 🔧 Geliştirme

### Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm start

# Android'de çalıştır
npm run android

# iOS'ta çalıştır
npm run ios

# Web'de çalıştır
npm run web
```

### Redux Store Yapısı

```javascript
{
  data: {
    product: [],           // Ürün listesi
    category: [],          // Kategori listesi
    loading: true,         // Loading durumu
    error: null,           // Hata durumu
    selectedCategory: "All", // Seçili kategori
    searchText: "",        // Arama metni
    basket: [],            // Sepetteki ürünler
    totalAmount: 0,        // Toplam tutar
    favorite: []           // Favori ürünler
  }
}
```

### AsyncStorage Kullanımı

```javascript
// Favori ürünleri kaydetme
await AsyncStorage.setItem("Favorites", JSON.stringify(favorites));

// Sepet verilerini kaydetme
await AsyncStorage.setItem("Basket", JSON.stringify(basket));

// Verileri okuma
const favorites = await AsyncStorage.getItem("Favorites");
const basket = await AsyncStorage.getItem("Basket");
```

### API Entegrasyonu

```javascript
// Ürün verilerini çekme
export const fetchData = createAsyncThunk("data/fetchData", async (url) => {
  const response = await axios.get(url);
  return response.data;
});

// Kategori verilerini çekme
export const fetchCategory = createAsyncThunk("category/fetchCategory", async (url) => {
  const response = await axios.get(url);
  return response.data;
});
```

---

## 🚀 Deployment

### Expo Build

```bash
# EAS Build kurulumu
npm install -g @expo/cli
npx expo install @expo/cli

# Build oluştur
eas build --platform android
eas build --platform ios
eas build --platform all
```

### APK Build

```bash
# Android APK
eas build --platform android --profile preview

# iOS Build
eas build --platform ios --profile preview
```

### Environment Variables

```env
# API Base URL
EXPO_PUBLIC_API_BASE_URL=https://your-api-url.com

# App Configuration
EXPO_PUBLIC_APP_NAME=ShopNow
EXPO_PUBLIC_APP_VERSION=1.0.0
```

---

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

### Geliştirme Kuralları
- React Native best practices'leri takip edin
- Redux state'ini immutable tutun
- Responsive tasarım prensiplerini uygulayın
- Performance optimizasyonlarını göz önünde bulundurun
- AsyncStorage kullanımını optimize edin

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

**Bu projeyi geliştiren: Mehmet Çelebi Gezer**

Bu e-ticaret mobil uygulaması, modern mobil teknolojiler kullanılarak geliştirilmiştir. React Native, Redux Toolkit ve Expo ile oluşturulmuş olup, kullanıcı dostu arayüzü, güçlü state management ve offline desteği ile profesyonel bir mobil alışveriş deneyimi sunmaktadır.

### 🎯 Proje Detayları
- **Geliştirme Süresi:** [X] hafta/gün
- **Kullanılan Teknolojiler:** React Native, Redux Toolkit, Expo, React Native Paper
- **Özellikler:** Sepet sistemi, Favori sistemi, Kategori filtreleme, Offline support
- **Platform:** iOS, Android, Web

---

## 🙏 Teşekkürler

- [React Native](https://reactnative.dev/) ekibine
- [Expo](https://expo.dev/) ekibine
- [Redux](https://redux.js.org/) ekibine
- [React Native Paper](https://reactnativepaper.com/) ekibine
- [Lottie](https://lottiefiles.com/) ekibine
- Tüm açık kaynak katkıda bulunanlara

---

## 📞 İletişim

**Proje Hakkında Sorularınız İçin:**

- 📧 **E-posta:** [gezermcelebi@gmail.com](mailto:gezermcelebi@gmail.com)
- 💼 **LinkedIn:** [Mehmet Çelebi Gezer](https://www.linkedin.com/in/mehmet-%C3%A7elebi-gezer-605a38217/)
- 🐙 **GitHub:** [@gezerm85](https://github.com/gezerm85)

---

<div align="center">

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ by **Mehmet Çelebi Gezer**

*Modern mobil teknolojiler ile geliştirilmiş profesyonel e-ticaret uygulaması*

</div>
