import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,YellowBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import Detail from "./app/screens/detail";
import ThanhToan from "./app/screens/thanh-toan";
import ProducAll from "./app/screens/product-all";
import Login from "./app/screens/login";
import UserDetail from "./app/screens/user-detail";
import App from "./app/screens/app";

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ProducAll"
        component={ProducAll}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ThanhToan"
        component={ThanhToan}
        options={{
          // headerShown: false,
          title: "Thanh toán",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // headerShown: false,
          title: "Đăng nhập",
        }}
      />

      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          headerShown: false,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Stacks />
      </NavigationContainer>
    </Provider>
  );
}

export default MainScreen;
