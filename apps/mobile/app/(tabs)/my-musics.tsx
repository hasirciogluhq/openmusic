import { BlurView } from "expo-blur";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AppHeader } from "@/components/app-header";
import { DownloadRow } from "@/components/download-row";
import { SearchBar } from "@/components/search-bar";
import { librarySongs } from "@/data/mock-music";
import { colors, layout, radius, typography } from "@/theme";

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
        <BlurView intensity={30} tint="light" style={styles.summaryPill}>
          <Text style={styles.summaryValue}>248</Text>
          <Text style={styles.summaryLabel}>Toplam sarki</Text>
        </BlurView>
        <BlurView intensity={30} tint="light" style={styles.summaryPill}>
          <Text style={styles.summaryValue}>18.2 GB</Text>
          <Text style={styles.summaryLabel}>Yerel depolama</Text>
        </BlurView>
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
    paddingHorizontal: layout.pageInset,
    paddingTop: layout.pageTop,
    paddingBottom: layout.pageBottom,
    gap: layout.sectionGap,
  },
  summaryRow: {
    flexDirection: "row",
    gap: layout.stackGap,
  },
  summaryPill: {
    flex: 1,
    borderRadius: radius["3xl"],
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.glassStrong,
    padding: layout.insetLg,
    gap: layout.clusterGap,
    overflow: "hidden",
  },
  summaryValue: {
    color: colors.textPrimary,
    fontSize: typography.titleMd,
    fontWeight: "700",
  },
  summaryLabel: {
    color: colors.textSecondary,
    fontSize: typography.meta,
  },
  list: {
    gap: layout.clusterGap,
  },
});
