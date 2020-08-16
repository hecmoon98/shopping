import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { useRoute } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/EvilIcons";
import { color } from "react-native-reanimated";

function User(props) {
  const navigation = useNavigation();
  const [authSuccessful, setAuthSuccessful] = React.useState("");
  const [loginName, setLoginName] = React.useState("");
  const route = useRoute();
  useEffect(() => {
    AsyncStorage.getItem("USERLOGIN", (err, result) => {
      if (result) {
        setAuthSuccessful(JSON.parse(result).message);
        setLoginName(JSON.parse(result).hoTen);
      }
    });
  });

  const handleLogout = () => {
    AsyncStorage.removeItem("USERLOGIN");
    setAuthSuccessful("");
    props.setSuccessful("");
  };
  const handleLogin = () => {
    props.deleteArr();
  };
  const detaiUser = () => {
  };

  if (
    authSuccessful === "Auth successful" ||
    props.successful === "Auth successful"
  ) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "http://192.168.1.194:5000/uploads/anh-ngau-0-2.jpg",
          }}
          style={styles.img}
          blurRadius={0}
        ></ImageBackground>
        <View style={styles.loginContainer}>
          <View style={styles.loginContent}>
            <View style={styles.loginItemLogo}>
              <Image
                style={styles.logo}
                source={{
                  uri:
                    "http://192.168.1.194:5000/uploads/anh-ngau-0-2.jpg",
                }}
              />

              <TouchableOpacity
                style={styles.loginItemLogo2}
                onPress={() => {
                  navigation.navigate("UserDetail")
                }}
              >
                <View>
                  <Text
                    style={styles.loginName}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {loginName}
                  </Text>
                  <Text style={styles.loginInformation}>
                    Thông tin chi tiết
                  </Text>
                </View>
                <Icon name="chevron-right" size={35} color="gray" />
              </TouchableOpacity>
            </View>

            <View style={styles.loginItem}>
              <Icon name="credit-card" size={30} color="gray" />
              <Text style={styles.loginItemName}>Đơn hàng của tôi</Text>
            </View>

            <View style={styles.loginItem}>
              <Icon name="credit-card" size={30} color="gray" />
              <Text style={styles.loginItemName}>Đơn hàng chưa giao</Text>
            </View>

            <View style={styles.loginItem}>
              <Icon name="credit-card" size={30} color="gray" />
              <Text style={styles.loginItemName}>Đơn hàng đang giao</Text>
            </View>

            <View style={styles.loginItem}>
              <Icon name="credit-card" size={30} color="gray" />
              <Text style={styles.loginItemName}>Đơn hàng đã hoàn thành</Text>
            </View>

            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => {
                handleLogout();
              }}
            >
              Đăng Xuất
            </Button>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.nameCard}>Tài Khoản</Text>
        <View style={styles.content}>
          <View style={styles.item}>
            <Text style={styles.text}>Đã có tài khoản?</Text>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => {
                {
                  navigation.navigate("Login"), handleLogin();
                }
              }}
            >
              đăng nhâp
            </Button>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Chưa có tài khoản?</Text>
            <Button
              style={styles.btn}
              mode="contained"
              // onPress={() => {
              //   handleDatHang();
              // }}
            >
              đăng kí
            </Button>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Hoặc đăng nhập bằng?</Text>
            <View style={styles.itemFG}>
              <View>
                <Button
                  style={styles.btnF}
                  mode="contained"
                  // onPress={() => {
                  //   handleDatHang();
                  // }}
                >
                  facebook
                </Button>
              </View>
              <View>
                <Button
                  style={styles.btnG}
                  mode="contained"
                  // onPress={() => {
                  //   handleDatHang();
                  // }}
                >
                  google
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 38,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 150,
    paddingBottom: 150,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    fontSize: 18,
    paddingBottom: 10,
  },
  btn: {
    backgroundColor: "#DD3B2F",
    marginTop: 10,
  },
  nameCard: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemFG: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnF: {
    width: 150,
    backgroundColor: "#475EA4",
  },
  btnG: {
    width: 150,
    backgroundColor: "#C61016",
  },
  img: {
    height: 200,
    width: width,
    borderRadius: 10,
    padding: 10,
  },
  loginItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  loginItemLogo2: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    paddingBottom: 10,
  },
  loginItemLogo: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 70,
    borderColor: "#fff",
    borderWidth: 3,
  },
  loginContainer: {
    position: "relative",
  },
  loginContent: {
    position: "absolute",
    width: width,
    top: -50,
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 5,
  },
  loginInformation: {
    fontSize: 18,
    color: "#5f6368",
  },
  loginName: {
    fontWeight: "bold",
    fontSize: 20,
    width:150
  },
  loginItemName: {
    fontSize: 18,
    paddingLeft: 10,
    color: "#5f6368",
  },
});

const mapStateToProps = (state) => {
  return {
    successful: state.shoppingReducer.successful,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteArr: () => {
      dispatch(action.actDeleteArr());
    },
    login: (user) => {
      dispatch(action.actLoginAdmin(user));
    },
    setSuccessful: (successful) => {
      dispatch(action.actSuccessful(successful));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
