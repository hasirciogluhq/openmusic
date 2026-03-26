import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppDrawerContent } from "@/components/app-drawer-content";
import { colors } from "@/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Drawer
        drawerContent={(props) => <AppDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: colors.overlay,
          drawerStyle: {
            width: 312,
            backgroundColor: colors.sidebar,
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
