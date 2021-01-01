import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.text}>It works! :)</Text>
      <Text style={{ color: "lime" }}>Hot reloading works too! Yay!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
    fontStyle: "italic",
  },
});
