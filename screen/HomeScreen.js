import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import Detail from "../screen/Detail";
import ProductDetailScreen from "./ProductDetailScreen";

const Item = [
  {
    icon: <FontAwesome5 name="bread-slice" size={24} color="red" />,
    backcolor: "#f6f5f8",
    text: "Bánh Mỳ",
    click: "Detail",
  },
  {
    icon: <Entypo name="drink" size={24} color="red" />,
    backcolor: "#f6f5f8",
    text: "Đồ Uống",
    click: "Detail",
  },
  {
    icon: (
      <MaterialCommunityIcons name="food-fork-drink" size={24} color="red" />
    ),
    backcolor: "#f6f5f8",
    text: "Combo",
    click: "Detail",
  },
  {
    icon: <Ionicons name="ios-pizza-sharp" size={24} color="red" />,
    backcolor: "#f6f5f8",
    text: "Sandwich",
    click: "Detail",
  },
];

const content = [
  {
    image: require("../assets/pic1.jpeg"),
    name: "Bánh Mỳ Gà Nướng Sả",
    quantity: 1,
    Price: "25000",
  },
  {
    image: require("../assets/pic2.jpeg"),
    name: "Bánh Mỳ Sốt Tiêu Đen",
    quantity: 1,
    Price: "40000",
  },
  {
    image: require("../assets/pic3.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm ",
    quantity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/pic4.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm ",
    quantity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/pic7.jpeg"),
    name: "Bánh Mỳ Sốt Bò Hầm . ",
    quantity: 1,
    Price: "35000",
  },
  {
    image: require("../assets/pic8.jpeg"),
    name: "Trà Tắc Khổng Lồ ",
    quantity: 1,
    Price: "10000",
  },
];

const Slide = [
  {
    img: require("../assets/tuhu9tuoi.jpg"),
  },
  {
    img: require("../assets/TUHU2.jpg"),
  },
  {
    img: require("../assets/TUHU3.jpg"),
  },
  {
    img: require("../assets/TUHU4.jpg"),
  },
];

const HomeScreen = ({ navigation }) => {
  const handleIconClick = (selectedCategory) => {
    let defaultTab = "Bread"; // Default tab name

    if (selectedCategory === "Đồ Uống") {
      defaultTab = "Đồ Uống";
    } else if (selectedCategory === "Combo") {
      defaultTab = "Combo";
    } else if (selectedCategory === "Sandwich") {
      defaultTab = "Khác";
    }

    navigation.navigate("Product", { defaultTab });
  };
  return (
    //header
    <SafeAreaView style={styles.BackGroundPage}>
      <View style={styles.Header}>
        <View>
          <Text style={styles.Title}>Danh Mục</Text>
        </View>

        <View style={styles.HeaderItem}>
          {Item.map((ele, index) => (
            <TouchableOpacity
              key={index}
              style={styles.ItemBig}
              onPress={() => handleIconClick(ele.text)}
            >
              <View style={[styles.Item, { backgroundColor: ele.backcolor }]}>
                {ele.icon}
              </View>
              <Text style={styles.TextItem}>{ele.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Swiper style={styles.wrapper} showsButtons={true}>
        {Slide.map((slide, index) => (
          <View key={index} style={styles.slide1}>
            <Image source={slide.img} style={styles.image} />
          </View>
        ))}
      </Swiper>

      <View style={styles.main}>
        <View>
          {/* <Image
            source={require("../assets/tuhu9tuoi.jpg")}
            style={styles.imgbody}
          /> */}

          <FlatList
            style={styles.footer}
            data={content}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.rowContainer}>
                <TouchableOpacity style={styles.contentBig} onPress={()=> navigation.navigate("ItemCartDetail", { selectedItem: item })}>
                  <View style={styles.contentItem}>
                    <Image
                      source={item.image}
                      style={styles.imgcontent}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.prcieContent}>
                    <View style={{ width: "90%" }}>
                      <Text style={styles.TextItemcontent}>{item.name}</Text>
                    </View>
                    <View>
                      <Text style={styles.TextPrice}>đ {item.Price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            numColumns={3}
          />
        </View>
      </View>
      <View style={{ height: 40,width: "100%"}}></View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  BackGroundPage: {
    width: "100%",
    height: "100%",
  },
  Title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#515c6e",
  },
  Header: {
    backgroundColor: "#ffff",
    padding: 10,
  },
  ItemBig: {
    width: "24%",
    alignItems: "center",
    // justifyContent:'center'
  },
  HeaderItem: {
    flexDirection: "row",
    gap: 6,
  },
  Item: {
    marginHorizontal: 10,
    marginTop: 10,
    width: 60,
    height: 60,
    borderRadius: 50,
    // backgroundColor: "#fe8c68",
    alignItems: "center",
    justifyContent: "center",
  },

  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  image: {
    width: "100%", // Điều chỉnh kích thước hình ảnh theo ý muốn
    height: "100%",
  },

  iconimg: {
    width: 30,
    height: 30,
  },
  TextItem: {
    fontSize: 14,
    fontWeight: "bold",
    // paddingTop: 5,
    // width: 70,
    // marginLeft: 28,
    // alignItems: "center",
  },

  main: {
    backgroundColor: "#e9e9e9",
    flex: 1,
    padding: 10,
  },
  imgbody: {
    marginVertical: 20,
    width: "100%",
    height: 250,
  },
  footer: {
    flexDirection: "column",
    gap: 6,
  },
  rowContainer: {
    width: "33%",
  },
  contentItem: {},
  contentBig: {
    width: "100%",
    alignItems: "center",
  },
  prcieContent: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
  },
  TextItemcontent: {
    alignContent: "center",
  },
  imgcontent: {
    width: 100,
    height: 100,
  },
  TextPrice: {
    fontWeight: "bold",
  },
});
