import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function Card(props) {
  const handleMinMax = (product, minMax) => {
    props.minMaxProduct(product, minMax);
  };
  const navigation = useNavigation();

  const rennderItem = () => {
    if (props.cardProduct) {
      return props.cardProduct.map((Item, index) => {
        let imgs = Item.images[0].path;
        let img = `http://192.168.1.194:5000/${imgs}`;
        let _color = Item.color;
        return (
          <View key={index} style={styles.item}>
            <Image
              style={styles.image}
              source={{
                uri: img,
              }}
            ></Image>
            <View style={styles.detail}>
              <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
                {Item.name}
              </Text>
              <View style={styles.felter}>
                <Text
                  style={{
                    backgroundColor: _color,
                    borderColor: "#000",
                    borderWidth: 1,
                    width: 20,
                    height: 20,
                  }}
                ></Text>
                <Text style={styles.size}> / {Item.size}</Text>
              </View>
              <Text style={styles.price}>{Item.price.toLocaleString()}đ</Text>
            </View>
            <View style={styles.quantitys}>
              <TouchableOpacity
                onPress={() => {
                  handleMinMax(Item, "min");
                }}
              >
                <Icon name="minuscircleo" size={20} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{Item.soLuong}</Text>
              <TouchableOpacity
                onPress={() => {
                  handleMinMax(Item, "max");
                }}
              >
                <Icon name="pluscircleo" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        );
      });
    }
  };

  const renderDathangDetailPrice = () => {
    return props.cardProduct.reduce((total, item) => {
      total += item.price * item.soLuong;
      return total;
    }, 0);
  };
  const handleDatHang = () => {
    // navigation.navigate("ThanhToan")
if(props.cardProduct.length<=0){
  Alert.alert(
    "Giỏ hàng trống",
    "Mời bạn mua sản phẩm",
    [
      // {
      //   text: "Ask me later",
      //   onPress: () => console.log("Ask me later pressed"),
      // },
      // {
      //   text: "Cancel",
      //   onPress: () => console.log("Cancel Pressed"),
      //   style: "cancel",
      // },
      { text: "OK"},
    ],
    { cancelable: false }
  )
}else{
  Alert.alert(
    "Tiếng hành thanh toán",
    "OK",
    [
      // {
      //   text: "Ask me later",
      //   onPress: () => console.log("Ask me later pressed"),
      // },
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK",
      onPress: () => navigation.navigate("ThanhToan"),
    },
    ],
    { cancelable: false }
  )
    // navigation.navigate("ThanhToan")
}
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameCard}>Giỏ Hàng Của Tôi</Text>
        <View style={styles.content}>
          <ScrollView>
            {rennderItem()}
            <View style={styles.dathangContent}>
              <View style={styles.dathangDetail}>
                <View style={styles.dathangDetailNumSP}>
                  <Text style={styles.dathangDetailNum}>
                    {props.cardProduct.length}
                  </Text>
                  <Text style={styles.dathangDetailSP}> sản phẩm</Text>
                </View>
                <Text style={styles.dathangDetailTT}>Tạm tính:</Text>
                <Text style={styles.dathangDetailPrice}>
                  {renderDathangDetailPrice().toLocaleString()}đ
                </Text>
                {/* {renderDathangDetailPrice()} */}
              </View>
              <Button
                style={styles.btn}
                mode="contained"
                onPress={() => {
                  handleDatHang();
                }}
              >
                Tiến hành đặt hàng
              </Button>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 38,
    paddingBottom: 150,
  },
  content: {
    marginLeft: 15,
    marginRight: 15,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    paddingTop: 10,
  },
  image: {
    width: 100,
    height: 130,
  },
  felter: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 3,
  },
  quantitys: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginLeft: 5,
    marginRight: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    width: 140,
  },
  color: {
    fontSize: 13,
  },
  size: {
    fontSize: 13,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
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
  dathangDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dathangDetailNumSP: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  dathangDetailNum: {
    fontSize: 19,
    fontWeight: "bold",
  },
  dathangDetailSP: {
    fontSize: 17,
  },
  dathangDetailTT: {
    fontSize: 17,
  },
  dathangDetailPrice: {
    fontSize: 19,
    fontWeight: "bold",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#DD3B2F",
    marginBottom: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    cardProduct: state.shoppingReducer.cardProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    minMaxProduct: (item, status) => {
      dispatch(action.actMinMaxProduct(item, status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
