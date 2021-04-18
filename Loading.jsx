import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Придумываем вам прогноз погоды...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor:
      "linear-gradient(180deg, rgb(12, 139, 110), rgb(172, 0, 255));",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
