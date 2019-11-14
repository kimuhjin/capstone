import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>현재 위치를 찾고 있습니다</Text>
      <Text style={styles.text}>잠시만 기다려주세요...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    paddingHorizontal: 105,
    paddingVertical: 100,
    backgroundColor: "white"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 20
  }
});