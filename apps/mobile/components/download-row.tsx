import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";

import { Song } from "@/types/song";
import { colors, layout, radius, spacing, typography } from "@/theme";

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
    gap: layout.stackGap,
    padding: layout.inset,
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
    gap: spacing["1"],
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.body,
    fontWeight: "700",
  },
  meta: {
    color: colors.textSecondary,
    fontSize: typography.meta,
  },
  caption: {
    color: colors.textMuted,
    fontSize: typography.eyebrow,
  },
  trailing: {
    alignItems: "flex-end",
    gap: spacing["1"],
  },
  duration: {
    color: colors.textPrimary,
    fontSize: typography.meta,
    fontWeight: "600",
  },
  format: {
    color: colors.primary,
    fontSize: typography.eyebrow,
    fontWeight: "800",
  },
});
