import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";

import { Song } from "@/types/song";
import { colors, radius, spacing } from "@/theme";

type DownloadRowProps = {
  song: Song;
  caption?: string;
};

export function DownloadRow({ song, caption }: DownloadRowProps) {
  return (
    <BlurView intensity={30} tint="light" style={styles.row}>
      <View style={styles.artwork}>
        <Ionicons name="musical-note" size={18} color={colors.textPrimary} />
      </View>
      <View style={styles.copyWrap}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.meta}>
          {song.artist} • {song.album}
        </Text>
        {caption ? <Text style={styles.caption}>{caption}</Text> : null}
      </View>
      <View style={styles.trailing}>
        <Text style={styles.duration}>{song.duration}</Text>
        <Text style={styles.format}>{song.format}</Text>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius["3xl"],
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  artwork: {
    width: 50,
    height: 50,
    borderRadius: radius.xl,
    backgroundColor: colors.glassSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  copyWrap: {
    flex: 1,
    gap: 2,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  caption: {
    color: colors.textMuted,
    fontSize: 12,
  },
  trailing: {
    alignItems: "flex-end",
    gap: 4,
  },
  duration: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "600",
  },
  format: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "800",
  },
});
