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
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Surface } from "react-native-paper";
const { width, height } = Dimensions.get("window");
import { connect } from "react-redux";
import * as action from "./../../redux/action";
import { useNavigation } from "@react-navigation/native";
import * as url from "./../url";
import { Searchbar } from "react-native-paper";


function TimKiem(props) {
  let product;
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }

  if (props.product.products) {
    product = props.product.products.filter(function (el) {
      return removeAccents(el.name).toLowerCase().indexOf(removeAccents(searchQuery).toLowerCase()) > -1;
    });
  }

  const render = () => {
    return product.map((item, index) => {
      let imgs = item.images[0].path;
      let img = `${url.url}/${imgs}`;
      return (
        <TouchableWithoutFeedback
        key={index}
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

            <View style={styles.textAll}>
              <Text
                // ellipsizeMode="tail"
                // numberOfLines={1}
                style={{
                  textAlign: "left",
                  paddingTop: 15,
                  fontSize: 16,
                }}
              >
                {item.name}
              </Text>
              <Text style={styles.priceSP}>{item.price.toLocaleString()}₫</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    });
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <View>
        <ScrollView style={styles.alll}>{render()}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 38,
    paddingBottom: 58,
  },
  img: {
    height: 80,
    width: 60,
    borderRadius: 10,
    padding: 10,
  },
  contentSP: {
    marginRight: 10,
    marginLeft: 15,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    paddingTop: 10,
  },
  priceSP: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop:3
  },
  textAll: {
    paddingLeft:20,

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

export default connect(mapStateToProps, null)(TimKiem);
