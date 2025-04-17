import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Detail from "../screen/Detail";
import ProductDetailScreen from "../screen/ProductDetailScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialTopTabNavigator();

const bread = [
  {
    image: require("../assets/pic1.jpeg"),
    name: "Bánh Mỳ Gà Nướng Sả",
    quanity: 1,
    Price: "25000",
  },
  {
    image: require("../assets/pic2.jpeg"),
    name: "Bánh Mỳ Sốt Tiêu Đen",
    quanity: 1,
    Price: "40000",
  },
  {
    image: require("../assets/pic3.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm ",
    quanity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/pic4.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm ",
    quanity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/pic7.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm . ",
    quanity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/pic7.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm . ",
    quanity: 1,
    Price: "35000",
  },
];
const drink = [
  {
    image: require("../assets/pic8.jpeg"),
    name: "Trà Tắc Khổng Lồ ",
    quanity: 1,
    Price: "10000",
  },
  {
    image: require("../assets/dink2.jpeg"),
    name: "Trà Tắc Khổng Lồ ",
    quanity: 1,
    Price: "10000",
  },
  {
    image: require("../assets/dink3.jpeg"),
    name: "Trà Tắc Khổng Lồ ",
    quanity: 1,
    Price: "10000",
  },
  {
    image: require("../assets/dink4.jpeg"),
    name: "Trà Tắc Khổng Lồ ",
    quanity: 1,
    Price: "10000",
  },
];
const combo = [
  {
    image: require("../assets/combo1.jpeg"),
    name: "Bánh Mỳ Gà Nướng Sả",
    quanity: 1,
    Price: "25000",
  },
  {
    image: require("../assets/combo2.jpeg"),
    name: "Bánh Mỳ Sốt Tiêu Đen",
    quanity: 1,
    Price: "40000",
  },
  {
    image: require("../assets/combo3.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm ",
    quanity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/combo4.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm ",
    quanity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/combo5.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm . ",
    quanity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/combo6.jpeg"),
    name: "Trà Tắc Khổng Lồ ",
    quanity: 1,
    Price: "10000",
  },
];
const sanwich = [
  {
    image: require("../assets/sandwich1.jpeg"),
    name: "Bánh Mỳ Gà Nướng Sả",
    quanity: 1,
    Price: "25000",
  },
  {
    image: require("../assets/sandwich2.jpeg"),
    name: "Bánh Mỳ Sốt Tiêu Đen",
    quanity: 1,
    Price: "40000",
  },
  {
    image: require("../assets/sandwich3.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm ",
    quanity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/sandwich4.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm ",
    quanity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/sandwich5.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm . ",
    quanity: 1,
    Price: "35000",
  },
];

// const BreadDetail = () => <Detail data={bread} />;
// const DrinkDetail = () => <Detail data={drink} />;
// const ComBoDetail = () => <Detail data={combo} />;
// const SandwichDetail = () => <Detail data={sanwich} />;



const Product = ({ route, navigation }) => {
  const defaultTab = route.params?.defaultTab || 'Bread';

  const renderDetailScreen = (data) => () => <Detail data={data} navigation={navigation} />;

  return (
      <Tab.Navigator initialRouteName={defaultTab}>
        <Tab.Screen name="Bánh Mỳ" component={renderDetailScreen(bread)} />
        <Tab.Screen name="Đồ Uống" component={renderDetailScreen(drink)} />
        <Tab.Screen name="Combo" component={renderDetailScreen(combo)} />
        <Tab.Screen name="Khác" component={renderDetailScreen(sanwich)} />
      </Tab.Navigator>
  );
};
export default Product;

const styles = StyleSheet.create({});


