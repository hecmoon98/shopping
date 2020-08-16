import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Surface } from "react-native-paper";
const { width, height } = Dimensions.get("window");

export default function NewCollection() {
  let img = "http://192.168.1.194:5000/uploads/disney.jpg"
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Surface style={styles.surface}>
          <ImageBackground
            source={{
              uri:
                img,
            }}
            style={styles.img}
            blurRadius={0}
          ></ImageBackground>
        </Surface>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  surface: {
    // elevation: 15: la box-shadow,
    height: 600,
    width: '100%',
    overflow: "hidden",
  },
  img: {
    height: 600,
    width: '100%',
    borderRadius: 10,
  },
});
