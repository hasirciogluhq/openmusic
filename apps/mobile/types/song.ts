export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  format: "MP3" | "FLAC" | "AAC" | "WAV";
};

export type Genre = {
  id: string;
  name: string;
  trackCount: number;
  tint: string;
};

export type LibraryPreview = {
  id: string;
  title: string;
  caption: string;
  preview: string[];
};

export type Playlist = {
  slug: string;
  name: string;
  caption: string;
  count: number;
  initials: string;
};
