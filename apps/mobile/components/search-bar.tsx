import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "@/theme";

type SearchBarProps = {
  placeholder: string;
  compact?: boolean;
};

export function SearchBar({ placeholder, compact = false }: SearchBarProps) {
  return (
    <BlurView
      intensity={32}
      tint="light"
      style={[styles.wrap, compact ? styles.compactWrap : null]}
    >
      <Ionicons name="search" size={18} color={colors.textMuted} />
      <Text style={styles.placeholder}>{placeholder}</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    minHeight: 58,
    borderRadius: radius["3xl"],
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  compactWrap: {
    minHeight: 52,
    borderRadius: radius["2xl"],
  },
  placeholder: {
    color: colors.textMuted,
    fontSize: 15,
  },
});
