import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Detail from "../screen/Detail";
import ProductDetailScreen from "../screen/ProductDetailScreen";

const Tab = createMaterialTopTabNavigator();

const bread = [
  {
    img: require("../assets/pic1.jpeg"),
    Text: "Bánh Mỳ Gà Nướng Sả",
    Price: "25,000",
  },
  {
    img: require("../assets/pic2.jpeg"),
    Text: "Bánh Mỳ Sốt Tiêu Đen",
    Price: "40,000",
  },
  {
    img: require("../assets/pic3.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm ",
    Price: "35,000",
  },
  {
    img: require("../assets/pic4.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm ",
    Price: "35,000",
  },
  {
    img: require("../assets/pic7.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm . ",
    Price: "35,000",
  },
  {
    img: require("../assets/pic7.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm . ",
    Price: "35,000",
  },
];
const drink = [
  {
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
  {
    img: require("../assets/dink2.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
  {
    img: require("../assets/dink3.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
  {
    img: require("../assets/dink4.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
];
const combo = [
  {
    img: require("../assets/combo1.jpeg"),
    Text: "Bánh Mỳ Gà Nướng Sả",
    Price: "25,000",
  },
  {
    img: require("../assets/combo2.jpeg"),
    Text: "Bánh Mỳ Sốt Tiêu Đen",
    Price: "40,000",
  },
  {
    img: require("../assets/combo3.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm ",
    Price: "35,000",
  },
  {
    img: require("../assets/combo4.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm ",
    Price: "35,000",
  },
  {
    img: require("../assets/combo5.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm . ",
    Price: "35,000",
  },
  {
    img: require("../assets/combo6.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
];
const sanwich = [
  {
    img: require("../assets/sandwich1.jpeg"),
    Text: "Bánh Mỳ Gà Nướng Sả",
    Price: "25,000",
  },
  {
    img: require("../assets/sandwich2.jpeg"),
    Text: "Bánh Mỳ Sốt Tiêu Đen",
    Price: "40,000",
  },
  {
    img: require("../assets/sandwich3.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm ",
    Price: "35,000",
  },
  {
    img: require("../assets/sandwich4.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm ",
    Price: "35,000",
  },
  {
    img: require("../assets/sandwich5.jpeg"),
    Text: "Bánh Mỳ Sốt Bò Hầm . ",
    Price: "35,000",
  },
];

const BreadDetail = () => <Detail data={bread} />;
const DrinkDetail = () => <Detail data={drink} />;
const ComBoDetail = () => <Detail data={combo} />;
const SandwichDetail = () => <Detail data={sanwich} />;




const Product = ({ route, navigation }) => {
  const defaultTab = route.params?.defaultTab || 'Bread';

  const renderDetailScreen = (data) => () => <Detail data={data} navigation={navigation} />;

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName={defaultTab}>
        <Tab.Screen name="Bánh Mỳ" component={renderDetailScreen(bread)} />
        <Tab.Screen name="Đồ Uống" component={renderDetailScreen(drink)} />
        <Tab.Screen name="Combo" component={renderDetailScreen(combo)} />
        <Tab.Screen name="Khác" component={renderDetailScreen(sanwich)} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Product;

const styles = StyleSheet.create({});
