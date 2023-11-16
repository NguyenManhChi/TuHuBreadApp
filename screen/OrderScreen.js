import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  FlatList,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ItemCart from "../component/ItemCart";
import { ScrollView } from "react-native-gesture-handler";

const OrderScreen = ({ navigation }) => {
  const listCart = [
    {
      id: 1,
      image:
        "https://images.foody.vn/res/g30/299943/s400x400/4e4df7ae-2a5c-4fa7-a397-7e39672f-089c624c-231006154224.jpeg",
      name: "2 Bánh mì heo nướng Chiangmai + 2 Fanta/Sprite/Coca-Cola",
      price: 35000,
      quantity: 1,
      description:
        "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    },
    {
      id: 2,
      image:
        "https://images.foody.vn/res/g30/299943/s400x400/c1c5748f-433c-49d8-bc2f-31740ade-4671d3eb-231006154458.jpeg",
      name: "2 Bánh mì heo nướng Chiangmai + 2 Fanta/Sprite/Coca-Cola",
      price: 35000,
      quantity: 1,
      description:
        "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    },
    {
      id: 3,
      image:
        "https://images.foody.vn/res/g30/299943/s400x400/0e924e91-8e25-48f8-b693-e0293b3d-a64efd67-231018105441.jpeg",
      name: "2 Bánh mì heo nướng Chiangmai + 2 Fanta/Sprite/Coca-Cola",
      price: 35000,
      quantity: 1,
      description:
        "Cơm gà (1 Phần) + Gà Giòn Cay + Gà Rán(1 miếng) + Gà Giòn Cay + Pepsi Lon",
    },
  ]; // Assuming listCart is defined elsewhere in your code

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            source={require("../assets/Tuhulogo2.png")}
            style={styles.logo}
          />
        </TouchableHighlight>
      </View>
      {/* Content */}
      <ScrollView>
      <View>
        {listCart.length <= 0 && (
          <View style={styles.cartEmptyContainer}>
            <Text style={styles.cartEmptyText}>Giỏ Hàng Của Tôi</Text>
            <View style={styles.emptyCartContent}>
              <Text style={styles.emptyCartMessage}>
                Giỏ Hàng Của Bạn Đang Trống. Hãy Đặt món ngay!
              </Text>
              <TouchableOpacity
                style={styles.startOrderButton}
                onPress={() => navigation.navigate("Menu")}
              >
                <Text style={styles.startOrderButtonText}>
                  Bắt Đầu Đặt Hàng
                </Text>
              </TouchableOpacity>
              <View style={styles.emptyCartImageContainer}>
                <Image
                  source={require("../assets/TuHuLogo.jpg")}
                  style={styles.emptyCartImage}
                />
              </View>
            </View>
          </View>
        )}
        {listCart.length > 0 && (
          <View style={styles.cartNotEmptyContainer}>
            <Text style={styles.cartNotEmptyText}>Giỏ Hàng Của Tôi</Text>
            <View>
              <FlatList
                data={listCart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.cartItemContainer}>
                    <ItemCart data={item} navigation={navigation} />
                    {index === listCart.length - 1 && (
                      <View style={styles.cartSummaryContainer}>
                        <View style={styles.cartSummary}>
                          <Text style={styles.cartSummaryText}>
                            {listCart.length} MÓN
                          </Text>
                          <View style={styles.divider} />
                          <View style={styles.totalAmountContainer}>
                            <Text style={styles.totalAmountLabel}>
                              Tổng tiền
                            </Text>
                            <Text style={styles.totalAmountValue}>
                              {listCart
                                .reduce(
                                  (accumulator, currentItem) =>
                                    accumulator + currentItem.price,
                                  0
                                )
                                .toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                  minimumFractionDigits: 0,
                                })}
                            </Text>
                          </View>
                          <View style={styles.paymentButtonContainer}>
                            <TouchableOpacity style={styles.paymentButton}>
                              <Text style={styles.paymentButtonText}>
                                Thanh Toán
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View style={styles.emptySpace} />
                      </View>
                    )}
                  </View>
                )}
              />
            </View>
            <View
              style={{ height: 120, width: "100%", }}
            ></View>
          </View>
          
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 5,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: "50%",
  },

  // Location styles
  locationContainer: {
    height: 120,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
  },
  locationText: {
    fontSize: 16,
    color: "#ecf0f1",
    fontWeight: "bold",
  },
  locationIcon: {
    width: 50,
    height: 50,
  },
  startOrderButton: {
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 200,
    borderRadius: 25,
    marginTop: 10,
  },
  startOrderButtonText: {
    fontSize: 16,
    color: "#ecf0f1",
    fontWeight: "bold",
  },

  // Empty cart styles
  cartEmptyContainer: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  cartEmptyText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  emptyCartContent: {
    height: 400,
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 10,
    marginTop: 5,
    padding: 5,
  },
  emptyCartMessage: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 5,
  },
  emptyCartImageContainer: {
    width: "65%",
    height: "50%",
    marginLeft: 10,
  },
  emptyCartImage: {
    width: "100%",
    height: "100%",
  },

  // Cart not empty styles
  // Cart not empty styles (continued)
  cartNotEmptyContainer: {
    marginHorizontal: 5,
    marginTop: 10,
  },
  cartNotEmptyText: {
    fontSize: 24,
    fontWeight: "bold", // Add 'bold' here
    marginBottom: 3, // Add margin to match the rest of your styling
  },
  cartItemContainer: {
    marginHorizontal: 5,
  },
  cartSummaryContainer: {
    height: 250,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
  },
  cartSummary: {
    height: "100%",
    width: "100%",
    padding: 5,
  },
  cartSummaryText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#d3d3d3",
    marginTop: 5,
  },
  totalAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  totalAmountLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalAmountValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paymentButtonContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    width: "100%",
    marginLeft: 10,
  },
  paymentButton: {
    width: "90%",
    backgroundColor: "#e74c3c",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  paymentButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  emptySpace: {
    height: 630,
    width: "100%",
  },
});

export default OrderScreen;
