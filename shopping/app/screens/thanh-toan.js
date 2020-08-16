import { StatusBar } from "expo-status-bar";
import React, { useRef,useEffect } from "react";
import { StyleSheet, Text, View, ScrollView,Alert,AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { HelperText, TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { useNavigation } from "@react-navigation/native";

function ThanhToan(props) {
  const navigation = useNavigation();
  //   const [text, setText] = React.useState("");
  const [maGiamGia, setMaGiamGia] = React.useState("");
  const [hoVaTen, setHoVaTen] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [sdt, setSdt] = React.useState("");
  const [diaChi, setDiaChi] = React.useState("");
  const [ghiChu, setGhiChu] = React.useState("");
  const [userId, setUserId] = React.useState("0");

  const [maGiamGiaError, setMaGiamGiaError] = React.useState("");
  const [hoVaTenError, setHoVaTenError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [sdtError, setSdtError] = React.useState("");
  const [diaChiError, setDiaChiError] = React.useState("");
  const [ghiChuError, setGhiChuError] = React.useState("");
  // const [total, setTotal] = React.useState();


  useEffect(()=>{

  AsyncStorage.getItem("USERLOGIN", (err, result) => {
    if (result) {
      setHoVaTen(JSON.parse(result).hoTen);
      setEmail(JSON.parse(result).email);
      setSdt(JSON.parse(result).phoneNumber);
      setDiaChi(JSON.parse(result).diaChi);
      setUserId(JSON.parse(result)._id);

    }


  });
  },[])

  const hasErrors = () => {
    return !maGiamGia.includes("@");
  };

  const kiemTraRong = (inputVal, spanID, message) => {
    if (inputVal === "") {
      //khong hợp lệ
      spanID(message);
      return false;
    } else {
      // hop le
      spanID("");
      return true;
    }
  };

  const kiemTraChuoi = (inputVal, spanID, message) => {
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
    if (pattern.test(inputVal)) {
      //hople
      spanID("");
      return true;
    } else {
      spanID(message);
      return false;
    }
  };

  const kiemTraEmail = (inputVal, spanID, message) => {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputVal.match(pattern)) {
      //hop le
      spanID("");
      return true;
    } else {
      //khong hop le
      spanID(message);
      return false;
    }
  };
  const kiemTraSDT = (inputVal, spanID, message) => {
    var pattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (inputVal.match(pattern)) {
      //hop le
      spanID("");
      return true;
    } else {
      //khong hop le
      spanID(message);
      return false;
    }
  };

  const handleThanhToan = () => {

    let isValid = true;
    isValid &=
      kiemTraRong(hoVaTen, setHoVaTenError, "Họ và tên không được bỏ trống") &&
      kiemTraChuoi(
        hoVaTen,
        setHoVaTenError,
        "Họ và tên không không được có số"
      );
    isValid &=
      kiemTraRong(email, setEmailError, "Email không được bỏ trống") &&
      kiemTraEmail(email, setEmailError, "Email không hợp lệ");
    isValid &=
      kiemTraRong(sdt, setSdtError, "Số điện thoại không được bỏ trống") &&
      kiemTraSDT(sdt, setSdtError, "Số điện thoại không đúng định dạng");
    isValid &= kiemTraRong(
      diaChi,
      setDiaChiError,
      "Địa chỉ không được bỏ trống"
    );
    if (isValid) {
      let tong = props.cardProduct.reduce((total, item) => {
        total += item.price * item.soLuong;
        return total;
      }, 0);
      

      
      const objProduct = {
        hoTen: hoVaTen,
        email: email,
        phoneNumber: sdt,
        diaChi: diaChi,
        product: props.cardProduct,
        total: tong,
        discountCode: maGiamGia,
        trangThai: "Chưa Giao Hàng",
        liDo: ghiChu,
        userId: userId,
      };
      props.postProduct(objProduct);
      Alert.alert(
        "Bạn đã đặt hàng thành công!",
        "",
        [
          // {
          //   text: "Ask me later",
          //   onPress: () => console.log("Ask me later pressed"),
          // },
          {
            text: "",
            // onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK",
          onPress: () =>  {navigation.navigate("Trang chủ"),props.deleteCardProduct()},
        },
        ],
        { cancelable: false }
      )
    }

  };




  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.donHangContent}>
          <View style={styles.donHangHienThi}>
            <Icon name="shoppingcart" size={22} color="#586EBD" />
            <Text style={styles.donHangHienThiItem}>
              Hiển thị thông tin đơn hàng
            </Text>
          </View>
          <Text style={styles.donHangPrice}>320,000đ</Text>
        </View>

        <View style={styles.maGiamGiaContent}>
          <View style={styles.maGiamGia}>
            <TextInput
              style={styles.maGiamGiaInput}
              label="Mã giảm giá"
              value={maGiamGia}
              onChangeText={(maGiamGia) => setMaGiamGia(maGiamGia)}
            />
            <Button
              style={styles.maGiamGiaBtn}
              mode="contained"
              // onPress={() => console.log("Pressed")}
            >
              Sử dụng
            </Button>
          </View>
          <HelperText type="error" visible={hasErrors()}>
            Mã giảm giá không tồn tại!
          </HelperText>
        </View>

        <View style={styles.thongtinContent}>
          <Text style={styles.thongtinTitle}>Thông tin giao hàng</Text>
          <TextInput
            label="Họ và tên"
            value={hoVaTen}
            onChangeText={(hoVaTen) => setHoVaTen(hoVaTen)}
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => ref_input2.current.focus()}
          />

          <HelperText type="error" visible={hasErrors()}>
            {hoVaTenError}
          </HelperText>

          <TextInput
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            returnKeyType="next"
            onSubmitEditing={() => ref_input3.current.focus()}
            ref={ref_input2}
          />

          <HelperText type="error" visible={hasErrors()}>
            {emailError}
          </HelperText>
          <TextInput
            label="Số điện thoại"
            value={sdt}
            onChangeText={(sdt) => setSdt(sdt)}
            returnKeyType="next"
            onSubmitEditing={() => ref_input4.current.focus()}
            ref={ref_input3}
          />

          <HelperText type="error" visible={hasErrors()}>
            {sdtError}
          </HelperText>
          <TextInput
            label="Địa chỉ"
            value={diaChi}
            onChangeText={(diaChi) => setDiaChi(diaChi)}
            returnKeyType="next"
            onSubmitEditing={() => ref_input5.current.focus()}
            ref={ref_input4}
          />

          <HelperText type="error" visible={hasErrors()}>
            {diaChiError}
          </HelperText>

          <TextInput
            label="Ghi Chú"
            value={ghiChu}
            onChangeText={(ghiChu) => setGhiChu(ghiChu)}
            ref={ref_input5}
          />

          <HelperText type="error" visible={hasErrors()}></HelperText>

          <Button
            style={styles.thongtinBtn}
            mode="contained"
            onPress={() => handleThanhToan()}
          >
            Thanh toán
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  donHangContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    backgroundColor: "#f6f6f6",
  },

  donHangHienThi: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  donHangHienThiItem: {
    color: "#586EBD",
    fontSize: 18,
    width: 200,
    marginLeft: 10,
  },
  donHangPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  maGiamGia: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
  },
  maGiamGiaInput: {
    width: 215,
    height: 47,
  },
  maGiamGiaBtn: {
    paddingTop: 5,
    backgroundColor: "#DD3B2F",
    paddingBottom: 5,
  },
  maGiamGiaContent: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    backgroundColor: "#f6f6f6",
  },
  thongtinContent: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  thongtinInput: {
    marginBottom: 15,
  },
  thongtinTitle: {
    fontSize: 22,
    marginBottom: 15,
  },
  thongtinBtn: {
    backgroundColor: "#DD3B2F",
  },
});

const mapStateToProps = (state) => {
  return {
    cardProduct: state.shoppingReducer.cardProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postProduct: (item) => {
      dispatch(action.postProduct(item));
    },
    deleteCardProduct: () => {
      dispatch(action.actDeleteCardProduct());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThanhToan);
