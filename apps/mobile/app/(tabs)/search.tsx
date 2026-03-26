import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { SongRow } from "@/components/song-row";
import { librarySongs } from "@/data/mock-music";
import { colors, spacing } from "@/theme";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return librarySongs;
    }

    return librarySongs.filter((song) =>
      [song.title, song.artist, song.album].some((value) =>
        value.toLowerCase().includes(normalized),
      ),
    );
  }, [query]);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.title}>Ara</Text>
        <Text style={styles.subtitle}>
          Sarki, sanatci veya album adina gore filtrele.
        </Text>
      </View>

      <View style={styles.inputWrap}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Ornek: Dawn FM"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>Sonuclar</Text>
        <Text style={styles.resultsCount}>{results.length} kayit</Text>
      </View>

      <View style={styles.resultsList}>
        {results.map((song) => (
          <SongRow key={song.id} song={song} />
        ))}

        {results.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Eslesen sarki yok</Text>
            <Text style={styles.emptyText}>
              Gercek cihaz kutuphanesi baglandiginda arama ayni akisi kullanacak.
            </Text>
          </View>
        ) : null}
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
  },
  inputWrap: {
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
  },
  input: {
    color: colors.textPrimary,
    height: 56,
    fontSize: 16,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultsTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  resultsCount: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },
  resultsList: {
    gap: spacing.sm,
  },
  emptyState: {
    padding: spacing.lg,
    borderRadius: 24,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  emptyTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
});
