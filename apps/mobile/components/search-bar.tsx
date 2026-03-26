import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";

import { colors, layout, radius, typography } from "@/theme";

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
    minHeight: layout.controlHeight,
    borderRadius: radius["3xl"],
    paddingHorizontal: layout.inset,
    flexDirection: "row",
    alignItems: "center",
    gap: layout.clusterGap,
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  compactWrap: {
    minHeight: layout.controlHeightSm,
    borderRadius: radius["2xl"],
  },
  placeholder: {
    color: colors.textMuted,
    fontSize: typography.body,
  },
});
