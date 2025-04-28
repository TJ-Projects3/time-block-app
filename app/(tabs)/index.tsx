import { Image, StyleSheet, Platform, LogBox } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
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
        <ThemedView style={styles.featureBox}>
          <ThemedText style={styles.featureText}>
            <ThemedText style={styles.featureTextBold}>📅 Detailed Planning:</ThemedText> Organize your day with precision and simplicity.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.featureBox}>
          <ThemedText style={styles.featureText}>
            <ThemedText style={styles.featureTextBold}>🖱️ Drag-and-Drop:</ThemedText> Easily adjust your schedule with intuitive drag-and-drop functionality.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.featureBox}>
          <ThemedText style={styles.featureText}>
            <ThemedText style={styles.featureTextBold}>📊 Visualization:</ThemedText> Get a clear overview of your tasks and time blocks.
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
    backgroundColor: "#A1CEDC",
  },

  featuresContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  featuresTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureBox: {
    backgroundColor: "#d3d3d3",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 18,
  },

  featureTextBold: {
    fontSize: 18,
    fontWeight: "600"
  },

});
