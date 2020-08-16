import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Carousel from "../../app/components/banner-detail";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { useNavigation } from "@react-navigation/native";

function Detail(props) {
  const navigation = useNavigation();
  const [acviveColor, setActiveColor] = useState("");
  const [acviveSize, setActiveSize] = useState("");
  const [acviveSizeColor, setActiveSizeColor] = useState([]);

  const route = useRoute();
  const { item } = route.params;

  useEffect(() => {
    //Neu nhu useEffect nhận vào tham số thứ 2 là mảng rỗng thì nó đảm nhận chức năng tương ứng didMount bên component dạng Class
    props.detailColorSize();
  }, []);

  const felterColorAndSize = (id) => {
    if (props.listColorSize.colorSize) {
      return props.listColorSize.colorSize.filter((item) => {
        if (item.productId._id) {
          return item.productId._id == id;
        }
      });
    }
  };

  const renderColor = (id) => {
    let colors = felterColorAndSize(id);
    let color;
    if (colors) {
      color = colors.filter((item) => item.size == acviveSize);
    }
    if (acviveSize == "") {
      return (
        <View>
          <Text style={styles.descriptionItem}>Mời bạn chọn size</Text>
        </View>
      );
    } else {
      if (color) {
        return color.map((item, index) => {
          return (
            <View key={index}>
              <Text
                style={{
                  backgroundColor: item.color,
                  borderColor: "#000",
                  borderWidth: 1,
                  width: 40,
                  height: 40,
                  // marginBottom: 10,
                  marginTop: 5,
                }}
                onPress={() => {
                  setActiveColor(item.color), setActiveSizeColor(item);
                }}
              ></Text>
              <Text
                style={
                  acviveColor == item.color
                    ? styles.isAcviveColor
                    : styles.notIsAcviveColor
                }
              ></Text>
            </View>
          );
        });
      }
    }
  };
  const renderSize = (id) => {
    let size;
    let sizes = felterColorAndSize(id);
    let helper = [];
    if (sizes) {
      size = sizes.reduce((r, o) => {
        var key = o.size;
        if (!helper[key]) {
          helper[key] = Object.assign({}, o);
          r.push(helper[key]);
        }
        return r;
      }, []);
    }
    if (size) {
      return size.map((item, index) => {
        return (
          <View key={index}>
            <Text
              onPress={() => {
                setActiveSize(item.size),
                  setActiveColor(""),
                  setActiveSizeColor([]);
              }}
              style={styles.sizeItem}
            >
              {item.size}
            </Text>
            <Text
              style={
                acviveSize == item.size
                  ? styles.isAcviveSize
                  : styles.notIsAcviveSize
              }
            ></Text>
          </View>
        );
      });
    }

  };

  const handleBuyProduct = (id) => {
    if (acviveSizeColor.length === 0) {
      Alert.alert(
        "Mời bạn chọn size và màu",
        "",
        [
          {
            // text: "Cancel",
            style: "cancel",
          },
          { text: "Cancel" },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Sản phẩm đã thêm vào giỏ hàng",
        "OK",
        [
          // {
          //   text: "Ask me later",
          //   onPress: () => console.log("Ask me later pressed"),
          // },
          {
            text: "Ở lại",
            onPress: () => props.buyProduct(acviveSizeColor),
            style: "cancel",
          },
          {
            text: "Tới giỏ hàng",
            onPress: () => {
              props.buyProduct(acviveSizeColor),
                navigation.navigate("Giỏ hàng");
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Carousel images={item.images} />
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price.toLocaleString()}₫</Text>
          <Text style={styles.size}>KÍCH CỠ</Text>
          <View style={styles.sizeContent}>{renderSize(item._id)}</View>
          <Text style={styles.color}>MÀU SẮC</Text>
          <View style={styles.colorContent}>{renderColor(item._id)}</View>
          <TouchableOpacity>
            <Text style={styles.tuvan}>Tư vấn chọn kích cỡ</Text>
          </TouchableOpacity>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => handleBuyProduct(item._id)}
          >
            THÊM VÀO GIỎ HÀNG
          </Button>
          <Text style={styles.descriptionContent}>Mô Tả</Text>
          <Text style={styles.descriptionItem}>{item.moTa}</Text>

          <Text style={styles.descriptionContent}>Chất Liệu</Text>
          <Text style={styles.descriptionItem}>{item.chatLieu}</Text>

          <Text style={styles.descriptionContent}>Hướng Dẫn Sử Dụng</Text>
          <Text style={styles.descriptionItem}>{item.huongDanSD}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  content: {
    padding: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 19,
    paddingBottom: 5,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 20,
  },
  color: {
    fontSize: 16,
  },
  colorContent: {
    flexDirection: "row",
  },

  size: {
    fontSize: 16,
  },
  sizeContent: {
    flexDirection: "row",
  },
  sizeItem: {
    paddingTop: 10,
    borderColor: "#000",
    borderWidth: 1,
    width: 40,
    height: 40,
    textAlign: "center",
    alignItems: "center",
    marginTop: 5,
  },
  descriptionContent: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "bold",
  },
  descriptionItem: {
    fontSize: 15,
    fontStyle: "italic",
  },
  tuvan: {
    marginBottom: 25,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#DD3B2F",
    marginBottom: 15,
  },
  isAcviveColor: {
    marginTop: 2,
    width: 40,
    height: 2,
    backgroundColor: "#DD3B2F",
    marginBottom: 10,
  },
  notIsAcviveColor: {
    marginTop: 2,
    width: 40,
    height: 2,
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  isAcviveSize: {
    marginTop: 2,
    width: 40,
    height: 2,
    backgroundColor: "#DD3B2F",
    marginBottom: 10,
  },
  notIsAcviveSize: {
    marginTop: 2,
    width: 40,
    height: 2,
    backgroundColor: "transparent",
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    listColorSize: state.shoppingReducer.listColorSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyProduct: (item) => {
      dispatch(action.actBuyProduct(item));
    },
    detailColorSize: () => {
      dispatch(action.actDetailColorSize());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
