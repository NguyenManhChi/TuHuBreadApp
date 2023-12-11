import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import StoreDetailsScreen from "./StoreDetailsScreen";
const storeInfo = [
  {
    name: "Phố Triều Khúc",
    address: "10 P. Triều Khúc, Thanh Xuân Nam, Thanh Xuân, Hà Nội, Việt Nam",
    phone: "0353051530",
    openingHours: "8:00 AM - 6:00 PM",
    coordinates: {
      latitude: 20.9865782, // Update with the correct latitude
      longitude: 105.7977008,
    },
  },
  {
    name: "Thuỵ Khuê",
    address: "15C Đ. Thụy Khuê, Thuỵ Khuê, Tây Hồ, Hà Nội, Việt Nam",
    phone: "0353051530",
    openingHours: "8:00 AM - 6:00 PM",
    coordinates: {
      latitude: 21.0427208, // Update with the correct latitude
      longitude: 105.8292766,
    },
  },
  {
    name: "Trần Quốc Hoàn",
    address: "5 Ngõ 199 Trần Quốc Hoàn, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam",
    phone: "0353051530",
    openingHours: "8:00 AM - 6:00 PM",
    coordinates: {
      latitude: 21.0414849, // Update with the correct latitude
      longitude: 105.779233617,
    },
  },
  {
    name: "Nguyễn Tuân",
    address: "Số 10 Nguyễn Tuân, Thanh Xuân, Hà Nội",
    phone: "0353051530",
    openingHours: "8:00 AM - 6:00 PM",
    coordinates: {
      latitude: 20.9946333, // Update with the correct latitude
      longitude: 105.7850362,
    },
  },
];

const StoreListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image
          source={require("../assets/Tuhulogo2.png")}
          style={styles.logo}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            style={styles.footer}
            data={storeInfo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.rowContainer}>
                <View>
                  <TouchableOpacity
                    style={styles.Item}
                    onPress={() =>
                      navigation.navigate("StoreDetailsScreen", {
                        selectedItem: item
                      })
                    }
                  >
                    <View style={{ padding: 16 }}>
                      <Entypo
                        name="location"
                        size={24}
                        color="red"
                        style={styles.item}
                      />
                      <View style={{alignItems: "center", justifyContent: "center"}}>
                      <Text style={{ fontSize:20,color: "red", paddingBottom: 20, fontWeight: "bold" }}>
                        {" "}
                        {item.name}
                      </Text>
                      </View>
                      <Text style={styles.textItem}>
                        <AntDesign name="home" size={24} color="red" />{" "}
                        {item.address}
                      </Text>
                      <Text style={styles.textItem}>
                        <Feather name="phone-call" size={24} color="red" />{" "}
                        Phone: {item.phone}
                      </Text>
                      <Text style={styles.textItem}>
                        <AntDesign name="clockcircleo" size={24} color="red" />{" "}
                        Opening Hours: {item.openingHours}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      <View style={{ height: 50, width: "100%" }}></View>
    </SafeAreaView>
  );
};

export default StoreListScreen;

const styles = StyleSheet.create({
  Item: {
    backgroundColor: "white",
    margin: 30,
    padding: 10,
    borderRadius: "10%",
  },
  item: {
    paddingBottom: 20,
  },
  logo: {
    width: "100%",
  },
  footer: {},
  textItem: {
    paddingBottom: 10,
  },
});
