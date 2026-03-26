import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";

import { LibraryPreview } from "@/types/song";
import { colors, layout, radius, spacing, typography } from "@/theme";

type LibraryShelfProps = {
  library: LibraryPreview;
};

export function LibraryShelf({ library }: LibraryShelfProps) {
  return (
    <BlurView intensity={28} tint="light" style={styles.card}>
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
    </BlurView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius["4xl"],
    padding: layout.insetLg,
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.border,
    gap: layout.stackGap,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: layout.stackGap,
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.titleSm,
    fontWeight: "700",
  },
  meta: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    marginTop: spacing["1"],
  },
  previewRow: {
    flexDirection: "row",
    gap: layout.clusterGap,
  },
  previewCard: {
    flex: 1,
    minHeight: 84,
    borderRadius: radius["2xl"],
    backgroundColor: colors.glassSoft,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: layout.inset,
  },
  previewText: {
    color: colors.textPrimary,
    fontSize: typography.meta,
    fontWeight: "600",
  },
});
