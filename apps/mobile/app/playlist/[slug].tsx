import { Stack, useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AppHeader } from "@/components/app-header";
import { DownloadRow } from "@/components/download-row";
import { librarySongs, playlists } from "@/data/mock-music";
import { colors, layout, radius, typography } from "@/theme";

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
    paddingHorizontal: layout.pageInset,
    paddingTop: layout.pageTop,
    paddingBottom: layout.pageBottom,
    gap: layout.sectionGap,
  },
  heroCard: {
    borderRadius: radius["4xl"],
    padding: layout.insetLg,
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.border,
    gap: layout.clusterGap,
    overflow: "hidden",
  },
  heroCount: {
    color: colors.textPrimary,
    fontSize: typography.titleLg,
    fontWeight: "700",
  },
  heroHint: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    lineHeight: 20,
  },
  list: {
    gap: layout.clusterGap,
  },
});
