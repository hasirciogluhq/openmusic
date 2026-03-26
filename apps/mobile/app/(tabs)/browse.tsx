import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AppHeader } from "@/components/app-header";
import { GenreRail } from "@/components/genre-rail";
import { LibraryShelf } from "@/components/library-shelf";
import { SearchBar } from "@/components/search-bar";
import { SongTile } from "@/components/song-tile";
import { featuredLibraries, genres, spotlightTracks } from "@/data/mock-music";
import { colors, layout, typography } from "@/theme";

export default function BrowseScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <AppHeader
        eyebrow="OpenMusic"
        title="Özgür Müzik"
        subtitle="İsteiğin kategoride mizği ücretsiz dinleyebilirsin."
      />

      <SearchBar placeholder="Sanatci, sarki veya album ara" />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tur raflari</Text>
        <GenreRail items={genres} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Library preview</Text>
        <View style={styles.shelfStack}>
          {featuredLibraries.map((library) => (
            <LibraryShelf key={library.id} library={library} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.gridHeader}>
          <Text style={styles.sectionTitle}>On plana cikan sarkilar</Text>
          <Text style={styles.sectionMeta}>12 parca</Text>
        </View>
        <View style={styles.grid}>
          {spotlightTracks.map((song) => (
            <SongTile key={song.id} song={song} />
          ))}
        </View>
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
  section: {
    gap: layout.stackGap,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: typography.titleMd,
    fontWeight: "700",
    letterSpacing: -0.4,
  },
  shelfStack: {
    gap: layout.stackGap,
  },
  gridHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionMeta: {
    color: colors.textMuted,
    fontSize: typography.meta,
    fontWeight: "600",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: layout.stackGap,
  },
});
