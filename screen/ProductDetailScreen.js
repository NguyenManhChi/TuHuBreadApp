import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Button from "../component/button/Button";

const ProductDetailScreen = ({ route }) => {
  const { selectedItem } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={selectedItem.img} />
      <View style={styles.ProductText}>
        <Text style={styles.TextProduct}>{selectedItem.Text}</Text>
      </View>
      <View style={styles.TextBig}>
        {/* Display other details based on selectedItem */}
        <Text style={styles.TextChiTiet}>Tuhu bữa chính đầy đủ dưỡng chất và no bụng: tùy chọn 1 bánh mì & 1 cặp sandwich phomai & 1 đồ uống bất kỳ. </Text>
        <Text style={styles.TexPrice}>đ {selectedItem.Price}</Text>
      </View>
      <View style={styles.AddCart}>
      <Button
          textButton={"Thêm Vào Giỏ Hàng"}
          style={styles.AddCartText}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "120%",
    height: "45%",
  },
  ProductText: {
    paddingVertical: 20,
  },
  TextBig: {
    height: 120,
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderRadius: 30,
    borderColor: "#e6e6e6",
  },
  TextProduct: {
    fontSize: 20,
    fontWeight: "bold",
  },
  TextChiTiet: {
    color: "#9a9a9a",
  },
  TexPrice: {
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  TextReview: {
    paddingLeft: 10,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 17,
  },
  AddCart:{
    marginTop: 100,
    padding: 30,
  },
  AddCartText:{
  },
});

export default ProductDetailScreen;
