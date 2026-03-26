import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AppHeader } from "@/components/app-header";
import { DownloadRow } from "@/components/download-row";
import { SearchBar } from "@/components/search-bar";
import { librarySongs } from "@/data/mock-music";
import { colors, spacing } from "@/theme";

export default function MyMusicsScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <AppHeader
        eyebrow="Library"
        title="Indirilen muziklerin."
        subtitle="Cihaza ekledigin tum dosyalar burada. Son eklenenler en ustte tutulur."
      />

      <SearchBar placeholder="My Musics icinde ara" compact />

      <View style={styles.summaryRow}>
        <View style={styles.summaryPill}>
          <Text style={styles.summaryValue}>248</Text>
          <Text style={styles.summaryLabel}>Toplam sarki</Text>
        </View>
        <View style={styles.summaryPill}>
          <Text style={styles.summaryValue}>18.2 GB</Text>
          <Text style={styles.summaryLabel}>Yerel depolama</Text>
        </View>
      </View>

      <View style={styles.list}>
        {librarySongs.map((song, index) => (
          <DownloadRow
            key={song.id}
            song={song}
            caption={index === 0 ? "Az once eklendi" : "Offline dinlemeye hazir"}
          />
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
    paddingBottom: 120,
    gap: spacing.lg,
  },
  summaryRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  summaryPill: {
    flex: 1,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.glassStrong,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  summaryValue: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: "700",
  },
  summaryLabel: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  list: {
    gap: spacing.sm,
  },
});
