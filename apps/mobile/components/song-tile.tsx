import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";

import { Song } from "@/types/song";
import { colors, radius, spacing } from "@/theme";

type SongTileProps = {
  song: Song;
};

export function SongTile({ song }: SongTileProps) {
  return (
    <View style={styles.tile}>
      <View style={styles.artwork}>
        <Text style={styles.artworkLabel}>{song.artist.slice(0, 2).toUpperCase()}</Text>
      </View>

      <BlurView intensity={28} tint="dark" style={styles.overlay}>
        <Text style={styles.title} numberOfLines={1}>
          {song.title}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {song.artist}
        </Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: "47.5%",
    aspectRatio: 1,
    borderRadius: radius["4xl"],
    overflow: "hidden",
    backgroundColor: colors.tile,
    position: "relative",
    borderWidth: 1,
    borderColor: colors.border,
  },
  artwork: {
    flex: 1,
    backgroundColor: colors.glassSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkLabel: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: 1,
  },
  overlay: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
    borderRadius: radius.xl,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 2,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
