import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage,Alert } from "react-native";
import { HelperText, TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { useNavigation } from "@react-navigation/native";

function TimKiem(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();


    useEffect(() => {
      if (props.successLogin.length > 0) {
        AsyncStorage.setItem(
          "USERLOGIN",
          JSON.stringify(props.successLogin[0])
        );
        props.setSuccessful(props.successLogin[0].message)
        Alert.alert(
          "Đăng nhập thành công",
          "",
          [
            // {
            //   text: "Ask me later",
            //   onPress: () => console.log("Ask me later pressed"),
            // },
          
            { text: "OK",
            onPress: () => {navigation.navigate("Tài khoản");},
          },
          ],
          { cancelable: false }
        )
      }
    });


  const handleLogin = () => {
    const objUser = {
      email: email,
      password: password,
    };
    props.login(objUser);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          label="Tài Khoản"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          label="Mật Khẩu"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.btnItem}>
        <Button
          style={styles.btn}
          mode="contained"
          onPress={() => {
            handleLogin();
          }}
        >
          Đăng Nhập
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  btn: {
    backgroundColor: "#DD3B2F",
  },
  btnItem: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    successLogin: state.shoppingReducer.login,
    successful: state.shoppingReducer.successful,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(action.actLoginAdmin(user));
    },
    setSuccessful: (successful) => {
      dispatch(action.actSuccessful(successful));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimKiem);
