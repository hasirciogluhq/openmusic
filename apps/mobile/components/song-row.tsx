import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

import { Song } from "@/types/song";
import { colors, spacing } from "@/theme";

type SongRowProps = {
  song: Song;
};

export function SongRow({ song }: SongRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.playIcon}>
        <Ionicons name="play" size={16} color={colors.textPrimary} />
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.meta}>
          {song.artist} • {song.album}
        </Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.duration}>{song.duration}</Text>
        <Text style={styles.format}>{song.format}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: 20,
    backgroundColor: colors.surfaceStrong,
  },
  playIcon: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrap: {
    flex: 1,
    gap: 2,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
  },
  meta: {
    color: colors.textMuted,
    fontSize: 13,
  },
  right: {
    alignItems: "flex-end",
    gap: 2,
  },
  duration: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
  format: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "800",
  },
});
