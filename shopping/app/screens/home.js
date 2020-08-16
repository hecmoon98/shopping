import { StatusBar } from "expo-status-bar";
import React,{useEffect} from "react";
import { StyleSheet, Text, View, Animated, ScrollView,Button } from "react-native";
import { connect } from "react-redux";
import * as action from "./../../redux/action";


import Header from "./../components/header";
import Banner from "./../components/banner";
import NewArrival from "./../components/new-arrival";
import DanhMucSP from "./../components/danh-muc-SP";
import NuHome from "./../components/nu-home";
import NamHome from "./../components/nam-home";
import BeGaiHome from "./../components/begai-home";
import BeTraiHome from "./../components/betrai-home";
import EmBeHome from "./../components/embe-home";
import NewCollection from "./../components/new-collection";
import { AsyncStorage } from 'react-native';


function HomeRouter(props) {

  useEffect(() => {
    //Neu nhu useEffect nhận vào tham số thứ 2 là mảng rỗng thì nó đảm nhận chức năng tương ứng didMount bên component dạng Class
    props.getListlProduct();
    AsyncStorage.getItem("USERLOGIN", (err, result) => {
      if (result) {
        // setAuthSuccessful(JSON.parse(result).message);
        // setLoginName(JSON.parse(result).hoTen);
        props.getUserOne(JSON.parse(result)._id)
        
      }
    });
  }, []);

  let UID123_object = {
    name: 'Chris',
    age: 30,
    traits: { hair: 'brown', eyes: 'brown' }
  };
  // You only need to define what will be added or updated
  let UID123_delta = {
    age: 31,
    traits: { eyes: 'blue', shoe_size: 10 }
  };
  
  // AsyncStorage.setItem(
  //   'UID123',
  //   JSON.stringify(UID123_object),
  // );
  
  // let hihi = AsyncStorage.getItem('UID123', (err, result) => {
  //   console.log(JSON.parse(result).name)
  // })

  // // console.log(hihi)

  // const handle = () =>{
  //   // AsyncStorage.removeItem('UID123');
  //   })

  //   console.log("hihihi")
  // }

  return (

    <View style={styles.container}>
      <ScrollView>
 
        <Header />
        <Banner />
        <NewArrival />
        <DanhMucSP />
        <NuHome />
        <NamHome />
        <BeGaiHome />
        <BeTraiHome />
        <EmBeHome />
        <NewCollection />
        {/* <Button
  onPress={handle}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/> */}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  
});


// const mapStateToProps = state => {
//   return {
//     product: state.shoppingReducer.listProduct
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    getListlProduct: () => {
      dispatch(action.actGetListProductAPI());
    },
    getUserOne: (id) => {
      dispatch(action.actGetUserOne(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(HomeRouter);


