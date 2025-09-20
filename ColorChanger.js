import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ColorChanger({ onColorChange }) {
  const changeToPink = () => onColorChange("#FFB6C1");
  const changeToLightGreen = () => onColorChange("#90EE90");
  const changeToLightBlue = () => onColorChange("#ADD8E6");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Background Color</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={changeToPink}
        >
          <Text style={styles.buttonText}>Pink</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={changeToLightGreen}
        >
          <Text style={styles.buttonText}>Light Green</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.blueButton]}
          onPress={changeToLightBlue}
        >
          <Text style={styles.buttonText}>Light Blue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#333",
  },
  pinkButton: {
    backgroundColor: "#FFB6C1",
  },
  greenButton: {
    backgroundColor: "#90EE90",
  },
  blueButton: {
    backgroundColor: "#ADD8E6",
  },
  buttonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
  },
});
