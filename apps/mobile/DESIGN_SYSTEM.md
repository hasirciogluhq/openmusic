# OpenMusic Mobile Design System

Bu uygulama tek renk sistemi kullanir. Kaynak, kullanicinin verdigi CSS token yapisidir ve Expo/React Native tarafina birebir adlarla uyarlanmistir.

## Zorunlu kurallar

- Tum ekranlar sadece [theme/index.ts](/Users/hasircioglu/projects/openmusic/apps/mobile/theme/index.ts) icindeki tokenlari kullanir.
- Bilesen icinde hardcoded renk kullanilmaz.
- Yeni UI eklenirken `background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `accent`, `border`, `ring`, `sidebar*`, `chart*` tokenlari disina cikilmaz.
- Cam / liquid glass yuzeylerde dogrudan opak kart kullanilmaz; `expo-blur` + `glass`, `glassStrong`, `glassSoft`, `line` tokenlari birlikte kullanilir.
- Drawer, tab bar, search, playlist row, summary panel ve benzeri tum yuzeyler ayni sistemden beslenir.
- Ayrik renk paleti, gradient veya rastgele vurgu rengi eklenmez. Tur kartlari dahil tum vurgular `chart1` - `chart5` serisinden gelir.

## CSS -> Expo esleme

- `--background` -> `colors.background`
- `--foreground` -> `colors.foreground`
- `--card` -> `colors.card`
- `--card-foreground` -> `colors.cardForeground`
- `--popover` -> `colors.popover`
- `--popover-foreground` -> `colors.popoverForeground`
- `--primary` -> `colors.primary`
- `--primary-foreground` -> `colors.primaryForeground`
- `--secondary` -> `colors.secondary`
- `--secondary-foreground` -> `colors.secondaryForeground`
- `--muted` -> `colors.muted`
- `--muted-foreground` -> `colors.mutedForeground`
- `--accent` -> `colors.accent`
- `--accent-foreground` -> `colors.accentForeground`
- `--destructive` -> `colors.destructive`
- `--border` -> `colors.border`
- `--input` -> `colors.input`
- `--ring` -> `colors.ring`
- `--chart-1...5` -> `colors.chart1...chart5`
- `--sidebar*` -> `colors.sidebar*`

## Liquid glass uygulama kurali

Apple'in yeni liquid glass hissi Expo tarafinda birebir sistem API olarak gelmiyor. Bu projede yaklasim su:

- `BlurView` kullan
- Arka plan acik ve notr kalsin
- Cam yuzeylerde yarı saydam beyaz katman kullan
- Kenarlarda sert stroke yerine ince `line` kullan
- Golgeyi cok hafif tut
- Radius sistemi sadece `radius` tokenlarindan secilsin

## Kullanilacak blur yaklasimi

- Tab bar: `systemUltraThinMaterialLight`
- Search, drawer item, row, panel: `BlurView` + `glassStrong`
- Ikinci seviye yuzeyler: `BlurView` + `glass`
- En hafif ayrimlar: `glassSoft`

## Yasaklar

- Bilesen icinde `#hex`, `rgb()`, `rgba()` ile yeni renk yazmak
- Mor/pembe/turuncu gibi yeni vurgu aileleri eklemek
- Koyu tema tokenlarini bu projeye karistirmak
- Kart icinde kart icinde kart hiyerarsisi kurmak

## Tasarim hedefi

- Acik, notr, premium
- Apple benzeri yumusak materyal hissi
- Native tab ve native drawer davranisi
- Yogunluk yerine bosluk ve tipografi ile hiyerarsi
