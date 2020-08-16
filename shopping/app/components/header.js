import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.row2}>
            <TouchableOpacity>
              <Icon name="navicon" size={30} color="#000" 
                onPress={() => navigation.toggleDrawer("toggleDrawer")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.Logo}>HPHUNG</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row2}>
            <TouchableOpacity>
              <Icon
                style={styles.search}
                name="search"
                size={30}
                color="#000"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="bell" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 38,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
    marginLeft: 15,
  },
  row: {
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: "black",
  },
  Logo: {
    fontSize: 20,
    paddingLeft: 5,
  },
  search: {
    paddingRight: 5,
  },
});
