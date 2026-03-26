import { Song } from "@/types/song";

export const librarySongs: Song[] = [
  {
    id: "1",
    title: "Neon Coast",
    artist: "Ayla Demir",
    album: "Night Transfer",
    duration: "3:42",
    format: "MP3",
  },
  {
    id: "2",
    title: "Static Hearts",
    artist: "Mert Kaan",
    album: "Skyline Archive",
    duration: "4:08",
    format: "FLAC",
  },
  {
    id: "3",
    title: "Afterlight",
    artist: "Selin Yalin",
    album: "Blue Signal",
    duration: "2:57",
    format: "AAC",
  },
  {
    id: "4",
    title: "Drift Theory",
    artist: "Luna Vale",
    album: "Warm Machines",
    duration: "5:14",
    format: "WAV",
  },
];

export const quickMixes = [
  {
    title: "Son eklenenler",
    caption: "Cihaza son import edilen dosyalari one cikarir.",
    count: "12",
  },
  {
    title: "Uzun yol miksleri",
    caption: "Offline dinleme icin ardisik oynatma listeleri.",
    count: "08",
  },
];

export const downloadQueue = [
  {
    title: "Dosya secimi",
    caption: "Kullanici belge secici ile ses dosyasini veya klasoru sececek.",
  },
  {
    title: "Metadata tarama",
    caption: "Baslik, sanatci, album ve sure bilgileri parse edilecek.",
  },
  {
    title: "Yerel index",
    caption: "Arama ve hizli erisim icin yerel veritabanina yazilacak.",
  },
];
