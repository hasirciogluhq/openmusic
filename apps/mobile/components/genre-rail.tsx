import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Genre } from "@/types/song";
import { colors, layout, radius, spacing, typography } from "@/theme";

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
    gap: layout.stackGap,
    paddingRight: layout.inset,
  },
  card: {
    width: 154,
    minHeight: 104,
    borderRadius: radius["4xl"],
    padding: layout.insetLg,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  label: {
    color: colors.primaryForeground,
    fontSize: typography.titleMd,
    fontWeight: "700",
  },
  count: {
    color: colors.primaryForeground,
    fontSize: typography.eyebrow,
    fontWeight: "600",
  },
});
