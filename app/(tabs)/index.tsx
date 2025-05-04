import { Image, StyleSheet, Platform, LogBox } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark";

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/rb-gradient.jpg")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      }
    >
      <ThemedView>
        <ThemedText type="title">Time Blocking App ⏰</ThemedText>
      </ThemedView>

      <ThemedView style={styles.featuresContainer}>
        <ThemedText type="subtitle" style={styles.featuresTitle}>
          Features
        </ThemedText>
        <ThemedView
          style={[
            styles.featureBox,
            { backgroundColor: isDark ? "#2D3748" : "#E2E8F0" },
          ]}
        >
          <ThemedText style={styles.featureText}>
            <ThemedText style={styles.featureTextBold}>
              📅 Detailed Planning:
            </ThemedText>{" "}
            Organize your day with precision and simplicity.
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={[
            styles.featureBox,
            { backgroundColor: isDark ? "#2D3748" : "#E2E8F0" },
          ]}
        >
          <ThemedText style={styles.featureText}>
            <ThemedText style={styles.featureTextBold}>
              🖱️ Drag-and-Drop:
            </ThemedText>{" "}
            Easily adjust your schedule with intuitive drag-and-drop
            functionality.
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={[
            styles.featureBox,
            { backgroundColor: isDark ? "#2D3748" : "#E2E8F0" },
          ]}
        >
          <ThemedText style={styles.featureText}>
            <ThemedText style={styles.featureTextBold}>
              📊 Visualization:
            </ThemedText>{" "}
            Get a clear overview of your tasks and time blocks.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    alignItems: "center",
    padding: 20,
  },

  featuresContainer: {
    padding: 20,
  },
  featuresTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureBox: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 18,
  },
  featureTextBold: {
    fontSize: 18,
    fontWeight: "600",
  },
});
