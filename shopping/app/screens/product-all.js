import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { Surface } from "react-native-paper";
const { width, height } = Dimensions.get("window");
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { useRoute } from "@react-navigation/native";
import * as urlAPI from "./../url";

function ProducAll(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();

  let product = route.params.item[0];

  const handle = () => {
    // console.log("ihihihi");
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity>
          <Text style={styles.titleLeft}>{product.length} Sản Phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View style={styles.titleRight}>
            <Icon name="equalizer" size={20} color="gray" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.dow}>
        <FlatList
          data={product}
          numColumns={2}
          renderItem={({ item, index }) => {
            let img = `${urlAPI.url}/${item.images[0].path}`;
            return (
              <TouchableWithoutFeedback>
                <View style={styles.contentSP}>
                  <Surface style={styles.surface}>
                    <ImageBackground
                      source={{
                        uri: img,
                      }}
                      style={styles.img}
                      blurRadius={0}
                    ></ImageBackground>
                  </Surface>

                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{
                      width: 150,
                      textAlign: "center",
                      paddingTop: 15,
                      fontSize: 16,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={styles.priceSP}>{item.price.toLocaleString()}₫</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
          keyExtractor={(item) => item._id}
        />
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>felter</Text>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  {
                    setModalVisible(!modalVisible), handle();
                  }
                }}
              >
                <Text style={styles.textStyle}>Đóng bộ lọc</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  titleRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleLeft: {
    fontSize: 17,
  },
  all: {
    color: "gray",
  },
  surface: {
    // elevation: 15: la box-shadow,
    height: 200,
    width: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  img: {
    height: 200,
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
  contentSP: {
    marginRight: 10,
    marginLeft: 15,
    marginBottom: 20,
  },
  nameSP: {
    paddingTop: 10,
    textAlign: "center",
  },
  priceSP: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: 300,
    height: 500,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  dow:{
    marginBottom:100
  }
});

// const mapStateToProps = (state) => {
//   return {
//     product: state.shoppingReducer.listProduct,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getListlProduct: () => {
//       dispatch(action.actGetListProductAPI());
//     }
//   };
// };

export default connect(null, null)(ProducAll);
