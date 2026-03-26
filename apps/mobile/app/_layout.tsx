import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppDrawerContent } from "@/components/app-drawer-content";
import { colors } from "@/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Drawer
        drawerContent={(props) => <AppDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: "rgba(3, 5, 10, 0.48)",
          drawerStyle: {
            width: 312,
            backgroundColor: colors.drawer,
          },
          sceneStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="playlist/[slug]"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </SafeAreaProvider>
  );
}
