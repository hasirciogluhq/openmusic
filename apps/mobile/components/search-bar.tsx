import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing } from "@/theme";

type SearchBarProps = {
  placeholder: string;
  compact?: boolean;
};

export function SearchBar({ placeholder, compact = false }: SearchBarProps) {
  return (
    <View style={[styles.wrap, compact ? styles.compactWrap : null]}>
      <Ionicons name="search" size={18} color={colors.textMuted} />
      <Text style={styles.placeholder}>{placeholder}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    minHeight: 58,
    borderRadius: 24,
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.line,
  },
  compactWrap: {
    minHeight: 52,
    borderRadius: 20,
  },
  placeholder: {
    color: colors.textMuted,
    fontSize: 15,
  },
});
