import { NativeTabs } from "expo-router/unstable-native-tabs";

import { colors, typography } from "@/theme";

export default function TabsLayout() {
  return (
    <NativeTabs
      blurEffect="systemUltraThinMaterialLight"
      backgroundColor={colors.glass}
      badgeBackgroundColor={colors.primary}
      iconColor={{
        default: colors.textMuted,
        selected: colors.primary,
      }}
      labelStyle={{
        default: {
          color: colors.textMuted,
          fontSize: typography.tabLabel,
          fontWeight: "600",
        },
        selected: {
          color: colors.primary,
          fontSize: typography.tabLabel,
          fontWeight: "700",
        },
      }}
      shadowColor={colors.shadow}
      disableTransparentOnScrollEdge
    >
      <NativeTabs.Trigger name="browse">
        <NativeTabs.Trigger.Icon
          sf={{ default: "square.grid.2x2", selected: "square.grid.2x2.fill" }}
        />
        <NativeTabs.Trigger.Label>Browse</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="my-musics">
        <NativeTabs.Trigger.Icon
          sf={{ default: "music.note.list", selected: "music.note.list" }}
        />
        <NativeTabs.Trigger.Label>My Musics</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
