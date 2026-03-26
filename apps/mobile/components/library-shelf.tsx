import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

import { LibraryPreview } from "@/types/song";
import { colors, spacing } from "@/theme";

type LibraryShelfProps = {
  library: LibraryPreview;
};

export function LibraryShelf({ library }: LibraryShelfProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{library.title}</Text>
          <Text style={styles.meta}>{library.caption}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </View>

      <View style={styles.previewRow}>
        {library.preview.map((item) => (
          <View key={item} style={styles.previewCard}>
            <Text style={styles.previewText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    padding: spacing.lg,
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.line,
    gap: spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "700",
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  previewRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  previewCard: {
    flex: 1,
    minHeight: 84,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.06)",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: spacing.md,
  },
  previewText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },
});
