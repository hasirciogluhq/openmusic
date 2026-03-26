import { NativeTabs } from "expo-router/unstable-native-tabs";

import { colors } from "@/theme";

export default function TabsLayout() {
  return (
    <NativeTabs
      blurEffect="systemUltraThinMaterialDark"
      backgroundColor="rgba(11, 14, 22, 0.72)"
      badgeBackgroundColor={colors.accent}
      iconColor={{
        default: "rgba(232, 236, 245, 0.62)",
        selected: colors.textPrimary,
      }}
      labelStyle={{
        default: {
          color: "rgba(232, 236, 245, 0.66)",
          fontSize: 11,
          fontWeight: "600",
        },
        selected: {
          color: colors.textPrimary,
          fontSize: 11,
          fontWeight: "700",
        },
      }}
      shadowColor="rgba(255,255,255,0.08)"
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
