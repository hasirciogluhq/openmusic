import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { playlists } from "@/data/mock-music";
import { colors, spacing } from "@/theme";

const quickLinks = [
  { label: "Browse", icon: "compass-outline", href: "/(tabs)/browse" },
  { label: "My Musics", icon: "musical-notes-outline", href: "/(tabs)/my-musics" },
  { label: "Recently Added", icon: "time-outline", href: "/playlist/recently-added" },
  { label: "Offline", icon: "download-outline", href: "/playlist/offline-ready" },
] as const;

export function AppDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.content}
      scrollEnabled
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Library</Text>
        <Text style={styles.title}>OpenMusic</Text>
        <Text style={styles.subtitle}>
          Yerel koleksiyon, playlist girisleri ve hizli erisim menusu.
        </Text>
      </View>

      <View style={styles.links}>
        {quickLinks.map((item) => (
          <Pressable
            key={item.label}
            onPress={() => {
              router.push(item.href);
              props.navigation.closeDrawer();
            }}
            style={styles.linkRow}
          >
            <Ionicons name={item.icon} size={19} color={colors.textPrimary} />
            <Text style={styles.linkText}>{item.label}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.playlistSection}>
        <Text style={styles.sectionTitle}>Playlists</Text>
        {playlists.map((playlist) => (
          <Pressable
            key={playlist.slug}
            onPress={() => {
              router.push(`/playlist/${playlist.slug}`);
              props.navigation.closeDrawer();
            }}
            style={styles.playlistRow}
          >
            <View style={styles.playlistArt}>
              <Text style={styles.playlistArtText}>{playlist.initials}</Text>
            </View>
            <View style={styles.playlistTextWrap}>
              <Text style={styles.playlistName}>{playlist.name}</Text>
              <Text style={styles.playlistMeta}>{playlist.count} track</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
    gap: spacing.xl,
  },
  header: {
    gap: spacing.xs,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  title: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.6,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  links: {
    gap: spacing.sm,
  },
  linkRow: {
    minHeight: 54,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.line,
  },
  linkText: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  playlistSection: {
    gap: spacing.md,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: "700",
  },
  playlistRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  playlistArt: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: "center",
    justifyContent: "center",
  },
  playlistArtText: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: "800",
  },
  playlistTextWrap: {
    flex: 1,
    gap: 2,
  },
  playlistName: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  playlistMeta: {
    color: colors.textMuted,
    fontSize: 12,
  },
});
