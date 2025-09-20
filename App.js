import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import ColorChanger from "./ColorChanger";
import Counter from "./Counter";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.welcomeText}>Welcome to My App!</Text>
      <ColorChanger onColorChange={setBackgroundColor} />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
});
