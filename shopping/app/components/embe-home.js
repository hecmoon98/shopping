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
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Surface } from "react-native-paper";
const { width, height } = Dimensions.get("window");
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { useNavigation } from "@react-navigation/native";
import * as url from "./../url";

function EmBeHome(props) {
  let product
  if(props.product.products){
   product = props.product.products.filter((item) => item.categoryId.name == "em bé");
  }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity>
          <Text style={styles.titleLeft}>Em Bé</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProducAll", { item: [product] })}
        >
          <View style={styles.titleRight}>
            <Text style={styles.all}>Xem tất cả</Text>
            <Icon name="chevron-right" size={20} color="gray" />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={product}
          numColumns={2}
          //   horizontal={true}
          //   showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            let imgs = item.images[0].path;
            let img = `${url.url}/${imgs}`;
            if (index < 4) {
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Detail", { item })}
                >
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
            }
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  titleRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleLeft: {
    fontSize: 17,
    fontWeight: "bold",
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
});

const mapStateToProps = (state) => {
  return {
    product: state.shoppingReducer.listProduct,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getListlProduct: () => {
//       dispatch(action.actGetListProductAPI());
//     }
//   };
// };

export default connect(mapStateToProps, null)(EmBeHome);
