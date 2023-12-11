import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";

const OrderScreen = ({ navigation }) => {

  const route = useRoute();
  const params = route.params;
  const [listCart, SetListCart] = useState(null);


  const getCartData = async () => {
    try {
      const cartDataString = await AsyncStorage.getItem("cartData");
      const cartData = JSON.parse(cartDataString || "[]");
      
      SetListCart(cartData);
    } catch (e) {
      console.log("Lỗi lưu data local: ", e.message);
    }
  };
  const resetCart = async  () =>{
    try {
      await AsyncStorage.setItem("cartData", JSON.stringify([]));
    } catch (e) {
      console.log("Lỗi lưu data local: ");
    }
  }
  const executeOnLoad = () => {
    getCartData();
  };
  useEffect(() => {
    executeOnLoad();
  });

 
  const cartLength = listCart ? listCart.length : 0;
  
  // const [listData,setListData] = useState()
  //  useEffect(()=>{
  //   setListData(listCart);
    
  //  },[])
  
  
  return (
    <SafeAreaView onLayout={executeOnLoad}>
      <View>
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
        <View >
          <View >
            {cartLength <= 0 && (
              <View style={styles.cartEmptyContainer}>
                <Text style={styles.cartEmptyText}>Giỏ Hàng Của Tôi</Text>
                <View style={styles.emptyCartContent}>
                  <Text style={styles.emptyCartMessage}>
                    Giỏ Hàng Của Bạn Đang Trống. Hãy Đặt món ngay!
                  </Text>
                  <TouchableOpacity
                    style={styles.startOrderButton}
                    onPress={() => navigation.navigate("HomeScreen")}
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
            {cartLength > 0 && (
              <View style={styles.cartNotEmptyContainer}>
                <Text style={styles.cartNotEmptyText}>Giỏ Hàng Của Tôi</Text>
                <View >
                  <View style={{height: "100"}}>
                    <FlatList
                      data={listCart}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item, index }) => (
                        <View style={styles.cartItemContainer}>
                          <ItemCart data={item} navigation={navigation} />
                          {index === cartLength - 1 && (
                            <View style={styles.cartSummaryContainer}>
                              <View style={styles.cartSummary}>
                                <Text style={styles.cartSummaryText}>
                                  {cartLength} MÓN
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
                                        accumulator + currentItem.Price * currentItem.quantity,
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
                                  <TouchableOpacity
                                  onPress={()=> { navigation.navigate("NavBar"); resetCart();} }
                                    style={styles.paymentButton}
                                  >
                                    <Text style={styles.paymentButtonText}>
                                      Thanh Toán
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                              <View style={styles.emptySpace} />
                              <View style={{ height: 250, width: "100%", backgroundColor: "black"}}></View>
                            </View>
                            
                          )}
                        </View>
                        
                      )}
                    />
                    
                  </View>
                </View>
                
              </View>
            )}
          </View>
        </View>
      </View>
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
    marginLeft:70,
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
    marginTop: 10,
    marginLeft: 40,
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
    marginBottom: 470,
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