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
import { Surface, } from "react-native-paper";
const { width, height } = Dimensions.get("window");

export default function DanhMucSP() {
  const [todos, setTodos] = useState([
    {
      name: "Nữ",
      img:
        "http://192.168.1.194:5000/uploads/6ds20s006-cb196-2.jpg",
      id: "1",
    },
    {
      name: "Nam",
      img:
        "http://192.168.1.194:5000/uploads/1ts.jpg",
      id: "2",
    },
    {
      name: "Bé Gái",
      img:
        "http://192.168.1.194:5000/uploads/1ta20s008-sb060-1.jpg",
      id: "3",
    },
    {
      name: "Bé Trai",
      img:
        "http://192.168.1.194:5000/uploads/1bj.jpg",
      id: "4",
    },
    {
      name: "Em Bé",
      img:
        "http://192.168.1.194:5000/uploads/7ts20s002-pr071-9-12.jpg",
      id: "5",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity>
          <Text style={styles.titleLeft}>Danh mục sản phẩm</Text>
        </TouchableOpacity>
      </View>

 

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          let img = item.img;
          return (
            <TouchableWithoutFeedback>
              <Surface style={styles.surface}>
                <ImageBackground
                  source={{ uri: img }}
                  style={styles.img}
                  blurRadius={1}
                >
                  {/* <Icon name="music" color="#fff" size={22} /> */}
                  <Text style={styles.name}>{item.name}</Text>
                </ImageBackground>
              </Surface>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom:20
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  titleLeft: {
    fontSize: 17,
    fontWeight: "bold",
  },
  all: {
    color: "gray",
  },

  surface: {
    elevation: 15,
    height: 150,
    width: 150,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
    overflow: "hidden",
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    position: "absolute",
    bottom: 10,
    left: 15,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
