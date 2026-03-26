export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  format: "MP3" | "FLAC" | "AAC" | "WAV";
};
