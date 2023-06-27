import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    color: "#eee",

    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#aa184b",
    borderBottomWidth: 2,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
