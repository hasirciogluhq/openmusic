import { Genre, LibraryPreview, Playlist, Song } from "@/types/song";

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
  {
    id: "5",
    title: "Velvet Echo",
    artist: "Deniz Ates",
    album: "Lacquered Lights",
    duration: "3:21",
    format: "MP3",
  },
  {
    id: "6",
    title: "Golden Static",
    artist: "Cem Arman",
    album: "North Window",
    duration: "4:42",
    format: "FLAC",
  },
];

export const genres: Genre[] = [
  {
    id: "pop",
    name: "Pop",
    trackCount: 48,
    tint: "#9ECAFF",
  },
  {
    id: "rock",
    name: "Rock",
    trackCount: 31,
    tint: "#5C7CFF",
  },
  {
    id: "indie",
    name: "Indie",
    trackCount: 26,
    tint: "#445DFF",
  },
];

export const featuredLibraries: LibraryPreview[] = [
  {
    id: "recent",
    title: "Recently Played",
    caption: "Sabah listeleri, son geceler ve yeniden donulen albumler.",
    preview: ["City Drive", "Late Hours", "Glow Tape"],
  },
  {
    id: "offline",
    title: "Offline Ready",
    caption: "Ucak modu veya zayif ag senaryolari icin hazir.",
    preview: ["Dawn Run", "No Signal", "Coastline"],
  },
  {
    id: "vinyl",
    title: "Vinyl Mood",
    caption: "Daha analog, daha yumusak, gec saatlere uygun secimler.",
    preview: ["Amber Room", "Soft Needle", "Blue Hall"],
  },
];

export const spotlightTracks = librarySongs.slice(0, 4);

export const playlists: Playlist[] = [
  {
    slug: "recently-added",
    name: "Recently Added",
    caption: "Bu hafta cihaza gelen yeni dosyalar.",
    count: 14,
    initials: "RA",
  },
  {
    slug: "offline-ready",
    name: "Offline Ready",
    caption: "Yol, ucus ve metro icin sabit duran secim.",
    count: 26,
    initials: "OF",
  },
  {
    slug: "night-drive",
    name: "Night Drive",
    caption: "Daha koyu tonda synth ve pop secimleri.",
    count: 18,
    initials: "ND",
  },
  {
    slug: "soft-rock",
    name: "Soft Rock",
    caption: "Sert olmayan ama dolgun gitar katmanlari.",
    count: 21,
    initials: "SR",
  },
];
