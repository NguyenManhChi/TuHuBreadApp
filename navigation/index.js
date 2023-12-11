import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignUpScreen from "../screen/SignUpScreen";
import LoginScreen from "../screen/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import NavBar from "../component/NavBar";
import Detail from "../screen/Detail";
import Product from "../component/Product";
import { faL } from "@fortawesome/free-solid-svg-icons";
import ProductDetailScreen from "../screen/ProductDetailScreen";
import IntroductionScreen from "../screen/IntroductionScreen";
import ItemCartDetail from "../component/ItemCartDetail";
import StoreDetailsScreen from "../screen/StoreDetailsScreen";
import Profile from "../component/Profile";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="NavBar">

       <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: true,
          headerBackTitle: "Trở Về",
          headerTitle: "Đăng Nhập" }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
            <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="NavBar"
        component={NavBar}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: true,
          headerBackTitle: "Trở Về",
          headerTitle: "Sản Phẩm"  }}
      />
        <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IntroductionScreen"
        component={IntroductionScreen}
        options={{ headerShown: true
        ,headerBackTitle: "Trở Về",
        headerTitle: "Giới Thiệu"  }}
      />
      <Stack.Screen
        name="ItemCartDetail"
        component={ItemCartDetail}
        options={{ headerShown: true
          ,headerBackTitle: "Trở Về",
          headerTitle: "Chi Tiết Sản Phẩm" }}
      />
      <Stack.Screen
        name="StoreDetailsScreen"
        component={StoreDetailsScreen}
        options={{ headerShown: true
          ,headerBackTitle: "Trở Về",
          headerTitle: "Cửa Hàng" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true,
          headerBackTitle: "Trở Về", }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
