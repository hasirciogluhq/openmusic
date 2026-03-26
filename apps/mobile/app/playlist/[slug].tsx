import { Stack, useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AppHeader } from "@/components/app-header";
import { DownloadRow } from "@/components/download-row";
import { librarySongs, playlists } from "@/data/mock-music";
import { colors, radius, spacing } from "@/theme";

export default function PlaylistScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const playlist = playlists.find((item) => item.slug === slug) ?? playlists[0];

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader
          eyebrow="Playlist"
          title={playlist.name}
          subtitle={playlist.caption}
          showMenuButton
        />

        <BlurView intensity={30} tint="light" style={styles.heroCard}>
          <Text style={styles.heroCount}>{playlist.count} track</Text>
          <Text style={styles.heroHint}>
            Bu liste drawer icinden secilen sabit playlist akisini temsil ediyor.
          </Text>
        </BlurView>

        <View style={styles.list}>
          {librarySongs.map((song) => (
            <DownloadRow key={`${playlist.slug}-${song.id}`} song={song} />
          ))}
        </View>
      </ScrollView>
    </>
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
  heroCard: {
    borderRadius: radius["4xl"],
    padding: spacing.lg,
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
    overflow: "hidden",
  },
  heroCount: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: "700",
  },
  heroHint: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    gap: spacing.sm,
  },
});
