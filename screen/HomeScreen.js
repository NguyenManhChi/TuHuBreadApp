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

const Item = [
  {
    icon: <FontAwesome5 name="bread-slice" size={24} color="black" />,
    backcolor: "#fe8c68",
    text: "Bánh Mỳ",
  },
  {
    icon: <Entypo name="drink" size={24} color="black" />,
    backcolor: "#efa5a6",
    text: "Đồ Uống",
  },
  {
    icon: (
      <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" />
    ),
    backcolor: "#add072",
    text: "ComBo",
  },
  {
    icon: <Ionicons name="ios-pizza-sharp" size={24} color="black" />,
    backcolor: "#8b9dff",
    text: "Sandwich",
  },
  {
    icon: <Ionicons name="ios-pizza-sharp" size={24} color="black" />,
    backcolor: "#8b9dff",
    text: "Sandwich",
  },
];

const content = [
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

const HomeScreen = ({ navigation }) => {
  return (
    //header
    <SafeAreaView style={styles.BackGroundPage}>
      <View style={styles.Header}>
        <View>
          <Text style={styles.Title}>Danh Mục</Text>
        </View>
        <View style={styles.HeaderItem}>
          {Item.map((ele, index) => (
            <TouchableOpacity style={styles.ItemBig}>
              <View style={[styles.Item, { backgroundColor: ele.backcolor }]}>
                {ele.icon}
              </View>
              <Text style={styles.TextItem}>{ele.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
          
      <View style={styles.main}>
        <View>
          <Image
            source={require("../assets/tuhu9tuoi.jpg")}
            style={styles.imgbody}
          />
          <FlatList
            style={styles.footer}
            data={content}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.rowContainer}>
                <TouchableOpacity style={styles.contentBig}>
                  <View style={styles.contentItem}>
                    <Image
                      source={item.img}
                      style={styles.imgcontent}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.prcieContent}>
                    <View style={{width: "90%"}}>
                    <Text style={styles.TextItemcontent}>{item.Text}</Text>
                    </View >
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
  contentItem: {

  },
    contentBig: {
      width: "100%",
      alignItems: "center",
    },
    prcieContent: {
      alignItems: "center",
      justifyContent: "space-around",
      padding: 5,
    },
    TextItemcontent:{
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


  // const styles = StyleSheet.create({
  //   BackGroundPage: {
  //     flex: 1, // Use flex: 1 to take up the entire screen
  //     backgroundColor: "#fff", // Set a background color
  //   },
  //   Title: {
  //     fontSize: 30,
  //     fontWeight: "bold",
  //     paddingLeft: 10,
  //     color: "#515c6e",
  //   },
  //   Header: {
  //     backgroundColor: "#fff", // Use a white background
  //     padding: 10,
  //   },
  //   ItemBig: {
  //     flex: 1, // Make each item take an equal part of the space
  //     alignItems: "center",
  //   },
  //   HeaderItem: {
  //     flexDirection: "row",
  //     justifyContent: "space-between", // Add space between items
  //     padding: 10,
  //   },
  //   Item: {
  //     width: 60,
  //     height: 60,
  //     borderRadius: 30, // Adjust to make it a circle
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   TextItem: {
  //     fontSize: 14,
  //     fontWeight: "bold",
  //   },
  
  //   main: {
  //     backgroundColor: "#e9e9e9",
  //     flex: 1,
  //     padding: 10,
  //   },
  //   imgbody: {
  //     marginVertical: 20,
  //     width: '100%',
  //     height: 250,
  //   },
  //   footer: {
  //     flexDirection: "row",
  //     flexWrap: "wrap", // Allow content to wrap to the next line
  //   },
  //   rowContainer: {
  //     width: "28%", // Use 33% for three items per row
  //   },
  //   contentItem: {
  //     backgroundColor: "#fff", // Use a white background
  //     borderRadius: 5,
  //     padding: 10,
  //     alignItems: "center",
  //   },
  //   contentBig: {
  //     width: "100%",
  //     alignItems: "center",
  //   },
  //   prcieContent: {
  //     padding: 5,
  //   },
  //   imgcontent: {
  //     width: 100,
  //     height: 100,
  //   },
  //   TextPrice: {
  //     fontWeight: "bold",
  //   },
  //   TextItemcontent: {},
  // });
  
