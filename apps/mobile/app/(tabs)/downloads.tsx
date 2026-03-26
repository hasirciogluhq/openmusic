import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { downloadQueue, librarySongs } from "@/data/mock-music";
import { colors, spacing } from "@/theme";

export default function DownloadsScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Indirilenler</Text>
        <Text style={styles.subtitle}>
          Kullanici tarafindan eklenen dosyalar ve import akisina hazir alan.
        </Text>
      </View>

      <Pressable style={styles.importButton}>
        <Ionicons name="add-circle-outline" size={20} color={colors.background} />
        <Text style={styles.importButtonText}>Cihazdan muzik sec</Text>
      </Pressable>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Import plani</Text>
        {downloadQueue.map((item) => (
          <View key={item.title} style={styles.queueRow}>
            <View style={styles.queueMarker} />
            <View style={styles.queueTextWrap}>
              <Text style={styles.queueTitle}>{item.title}</Text>
              <Text style={styles.queueCaption}>{item.caption}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Yerel dosya hedefleri</Text>
        {librarySongs.slice(0, 3).map((song) => (
          <View key={song.id} style={styles.fileRow}>
            <View>
              <Text style={styles.fileTitle}>{song.title}</Text>
              <Text style={styles.fileMeta}>
                {song.artist} • {song.duration}
              </Text>
            </View>
            <Text style={styles.filePill}>{song.format}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
    gap: spacing.lg,
  },
  header: {
    gap: spacing.xs,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 30,
    fontWeight: "800",
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 320,
  },
  importButton: {
    minHeight: 56,
    borderRadius: 20,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing.sm,
  },
  importButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: "800",
  },
  panel: {
    padding: spacing.lg,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    gap: spacing.md,
  },
  panelTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "800",
  },
  queueRow: {
    flexDirection: "row",
    gap: spacing.md,
    alignItems: "flex-start",
  },
  queueMarker: {
    width: 10,
    height: 10,
    marginTop: 6,
    borderRadius: 999,
    backgroundColor: colors.accent,
  },
  queueTextWrap: {
    flex: 1,
    gap: 3,
  },
  queueTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
  },
  queueCaption: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  fileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  fileTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
  },
  fileMeta: {
    color: colors.textMuted,
    fontSize: 13,
  },
  filePill: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "800",
    borderWidth: 1,
    borderColor: colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
});
