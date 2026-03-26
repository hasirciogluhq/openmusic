import { ScrollView, StyleSheet, Text, View } from "react-native";

import { SectionCard } from "@/components/section-card";
import { SongRow } from "@/components/song-row";
import { librarySongs, quickMixes } from "@/data/mock-music";
import { colors, spacing } from "@/theme";

export default function LibraryScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>OpenMusic</Text>
        <Text style={styles.title}>Telefonundaki muzigi dinle.</Text>
        <Text style={styles.subtitle}>
          Yerel kutuphane, hizli arama ve oynatma akisina hazir mobil altyapi.
        </Text>
      </View>

      <SectionCard
        title="Hizli baslangic"
        description="Sonraki adimda cihazdan dosya secimi ve oynatici katmani eklenecek."
      >
        {quickMixes.map((mix) => (
          <View key={mix.title} style={styles.mixRow}>
            <View style={styles.mixBadge}>
              <Text style={styles.mixBadgeText}>{mix.count}</Text>
            </View>
            <View style={styles.mixTextWrap}>
              <Text style={styles.mixTitle}>{mix.title}</Text>
              <Text style={styles.mixCaption}>{mix.caption}</Text>
            </View>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Kutuphane"
        description="Cihaza eklenen parcalar burada listelenecek."
      >
        {librarySongs.map((song) => (
          <SongRow key={song.id} song={song} />
        ))}
      </SectionCard>
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
  hero: {
    gap: spacing.sm,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  title: {
    color: colors.textPrimary,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "800",
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 320,
  },
  mixRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  mixBadge: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.surfaceStrong,
    alignItems: "center",
    justifyContent: "center",
  },
  mixBadgeText: {
    color: colors.accent,
    fontWeight: "800",
    fontSize: 16,
  },
  mixTextWrap: {
    flex: 1,
    gap: 2,
  },
  mixTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  mixCaption: {
    color: colors.textMuted,
    fontSize: 13,
  },
});
