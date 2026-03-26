import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, layout, radius, spacing, typography } from "@/theme";

type AppHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  showMenuButton?: boolean;
};

export function AppHeader({
  eyebrow,
  title,
  subtitle,
  showMenuButton = true,
}: AppHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.copyWrap}>
          <Text style={styles.eyebrow}>{eyebrow}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        {showMenuButton ? (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.menuButtonWrap}
          >
            <BlurView intensity={36} tint="light" style={styles.menuButton}>
              <Ionicons name="menu" size={20} color={colors.textPrimary} />
            </BlurView>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: layout.stackGap,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: layout.stackGap,
  },
  copyWrap: {
    flex: 1,
    gap: spacing["2"],
  },
  eyebrow: {
    color: colors.textMuted,
    fontSize: typography.eyebrow,
    fontWeight: "700",
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.display,
    lineHeight: 40,
    fontWeight: "800",
    letterSpacing: -1,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 22,
    maxWidth: 290,
  },
  menuButtonWrap: {
    width: layout.iconButton,
    height: layout.iconButton,
    borderRadius: radius["2xl"],
    overflow: "hidden",
  },
  menuButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
