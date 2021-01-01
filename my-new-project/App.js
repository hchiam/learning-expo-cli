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
      <Text style={textStyle}>Using object to set styles works too!</Text>
    </View>
  );
}

/** Note: Material UI's makeStyles/createStyles won't work
 * because React Native doesn't have className.
 * It's not transforming HTML into mobile components.
 */

const textStyle = {
  fontSize: 20,
  backgroundColor: "blue",
  color: "white",
  padding: 10,
  marginTop: 10,
  position: "absolute",
  bottom: "20%",
};

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
