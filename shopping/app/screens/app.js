import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeRouter from "./HomeRouter";
import Card from "./Card";
import TimKiem from "./TimKiem";
import User from "./User";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import * as action from "./../../redux/action";

function App(props) {
    const Tab = createBottomTabNavigator();

    function IconWithBadge({ name, badgeCount, color, size }) {
      return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
          <Icon name={name} size={size} color={color} />
          {/* <Image source={name} style={{width:20,height:20}} resizeMode='contain' /> */}
          {badgeCount > 0 && (
            <View
              style={{
                // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )}
        </View>
      );
    }

    let count = props.cardProduct.length
    function HomeIconWithBadge(props) {
      // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
      return <IconWithBadge {...props} badgeCount={count} />;
    }

    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          inactiveTintColor: "gray",
          activeTintColor: "#ff5b77",
          // showLabel: false,
          tabStyle: {
            backgroundColor: "#fff",
            // height: 50,
            // paddingBottom: 10,
          },
        }}
      >
        <Tab.Screen
          name="Trang chủ"
          component={HomeRouter}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "home" : "home-outline"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tìm kiếm"
          component={TimKiem}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "account-search" : "account-search-outline"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Giỏ hàng"
          component={Card}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <HomeIconWithBadge
                name={focused ? "cart" : "cart-outline"}
                size={28}
                color={color}              
              />
              
            ),
          }}
        />
        <Tab.Screen
          name="Tài khoản"
          component={User}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "account" : "account-outline"}
                size={28}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });


const mapStateToProps = (state) => {
    // console.log(state.shoppingReducer.cardProduct)
    return {
      cardProduct: state.shoppingReducer.cardProduct,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    //   buyProduct: (item) => {
    //     dispatch(action.actBuyProduct(item));
    //   }
   
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);

