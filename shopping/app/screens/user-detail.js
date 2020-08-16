import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  AsyncStorage,
  Alert,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { HelperText, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as action from "./../../redux/action";

const UserDetail = (props) => {
  const [hoVaTen, setHoVaTen] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [sdt, setSdt] = React.useState("");
  const [diaChi, setDiaChi] = React.useState("");
  const [userId, setUserId] = React.useState("0");
  const [chucVu, setChucVu] = React.useState("");
  const navigation = useNavigation();
  useEffect(() => {
    AsyncStorage.getItem("USERLOGIN", (err, result) => {
      if (result) {
        setHoVaTen(JSON.parse(result).hoTen);
        setEmail(JSON.parse(result).email);
        setSdt(JSON.parse(result).phoneNumber);
        setDiaChi(JSON.parse(result).diaChi);
        setUserId(JSON.parse(result)._id);
        setChucVu(JSON.parse(result).chucVu);
      }
    });
  }, []);

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  const handlePutLogin = () => {
    let userObj = [
      {
        propName: "hoTen",
        value: hoVaTen,
      },
      {
        propName: "phoneNumber",
        value: sdt,
      },
      {
        propName: "diaChi",
        value: diaChi,
      },
    ];

    let setUserObj = {
      message: "Auth successful",
      _id: userId,
      email: email,
      hoTen: hoVaTen,
      chucVu: chucVu,
      phoneNumber: sdt,
      diaChi: diaChi,
    };

    AsyncStorage.setItem("USERLOGIN", JSON.stringify(setUserObj));

    props.patchUser(userObj, userId);
    props.setSuccessful("Auth successful");
    Alert.alert(
      "Cập nhập thành công",
      "",
      [
        // {
        //   text: "Ask me later",
        //   onPress: () => console.log("Ask me later pressed"),
        // },

        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Tài khoản");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: "http://192.168.1.194:5000/uploads/anh-ngau-0-2.jpg",
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
                  uri: "http://192.168.1.194:5000/uploads/anh-ngau-0-2.jpg",
                }}
              />
            </View>

            <TextInput
              style={styles.input}
              label="Họ và tên"
              value={hoVaTen}
              onChangeText={(hoVaTen) => setHoVaTen(hoVaTen)}
            />
            <TextInput
              style={styles.input}
              label="Email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              disabled
            />
            <TextInput
              style={styles.input}
              label="Số điện thoại"
              value={sdt}
              onChangeText={(sdt) => setSdt(sdt)}
            />
            <TextInput
              style={styles.input}
              label="Địa chỉ"
              value={diaChi}
              onChangeText={(diaChi) => setDiaChi(diaChi)}
            />

            <View style={styles.btn}>
              <Button
                style={styles.btnNo}
                mode="contained"
                onPress={() => {
                  navigation.navigate("Tài khoản");
                }}
              >
                Hủy
              </Button>
              <Button
                style={styles.btnYes}
                mode="contained"
                onPress={() => {
                  handlePutLogin();
                }}
              >
                Thay đổi
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 38,
  },
  img: {
    height: 200,
    width: width,
    borderRadius: 10,
    padding: 10,
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
    alignItems: "center",
    width: width,
  },
  loginContent: {
    alignItems: "center",
    top: -50,
  },
  input: {
    width: width - 30,
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
    flexDirection: "row",
  },
  btnYes: {
    marginLeft: 20,
    width: width / 2 - 25,
    backgroundColor: "#90caf9",
  },
  btnNo: {
    width: width / 2 - 25,
    backgroundColor: "#f48fb1",
  },
});

const mapStateToProps = (state) => {
  return {
    userOne: state.shoppingReducer.userOne,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    patchUser: (item, id) => {
      dispatch(action.actPatchUser(item, id));
    },
    setSuccessful: (successful) => {
      dispatch(action.actSuccessful(successful));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
