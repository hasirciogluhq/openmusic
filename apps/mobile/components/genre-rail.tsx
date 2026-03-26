import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Genre } from "@/types/song";
import { colors, spacing } from "@/theme";

type GenreRailProps = {
  items: Genre[];
};

export function GenreRail({ items }: GenreRailProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {items.map((item) => (
        <View key={item.id} style={[styles.card, { backgroundColor: item.tint }]}>
          <Text style={styles.label}>{item.name}</Text>
          <Text style={styles.count}>{item.trackCount} track</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.md,
    paddingRight: spacing.md,
  },
  card: {
    width: 154,
    minHeight: 104,
    borderRadius: 28,
    padding: spacing.lg,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  label: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "700",
  },
  count: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    fontWeight: "600",
  },
});
