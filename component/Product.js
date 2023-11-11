import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Detail from "../screen/Detail";

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
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
];
const drink = [
  {
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
  {
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
  {
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
  {
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
  {
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
  {
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
];
const combo = [
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
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
];
const sanwich = [
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
    img: require("../assets/pic8.jpeg"),
    Text: "Trà Tắc Khổng Lồ ",
    Price: "10,000",
  },
];


const BreadDetail = () => <Detail data={bread} />;
const DrinkDetail = () => <Detail data={drink} />;
const ComBoDetail = () => <Detail data={combo} />;
const SandwichDetail = () => <Detail data={sanwich} />;

const Product = ({route}) => {
  const defaultTab = route.params?.defaultTab || "Bread";
  return (
   
      <NavigationContainer independent={true}>
        <Tab.Navigator initialRouteName={defaultTab} r>
          <Tab.Screen name="Bread" component={BreadDetail} />
          <Tab.Screen name="Drink" component={DrinkDetail} />
          <Tab.Screen name="Combo" component={ComBoDetail} />
          <Tab.Screen name="Sandwich" component={SandwichDetail} />

        </Tab.Navigator>
      </NavigationContainer>
    
  );
};

export default Product;

const styles = StyleSheet.create({});
