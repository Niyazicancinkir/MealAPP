import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function CategoryGridTile({ title, color, onPress, images }) {
  console.log(images);
  return (
    <View style={styles.gridItem}>
      <ImageBackground
        imageStyle={styles.backgrounImage}
        style={styles.rootScreen}
        source={{ uri: images }}
      >
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 15,
    elevation: 4,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: { flex: 1 },
  buttonPressed: { opacity: 0.5 },
  title: { fontWeight: "bold", fontSize: 20, color: "white" },
  rootScreen: { flex: 1 },
  backgrounImage: {
    opacity: 0.8,
  },
});
