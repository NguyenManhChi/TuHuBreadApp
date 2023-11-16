import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ItemCart = (props) => {
  const data = props.data;
  const navigation = props.navigation;
  const [isAvtiveDescription, setIsActiveDescription] = useState(false);
  const [quantity, setQuantity] = useState(data.quantity);

  const toggleDescription = () => {
    setIsActiveDescription(!isAvtiveDescription);
  };

  return (
    <TouchableOpacity
      style={styles.cartItemContainer}
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "ItemDetail", params: { data: data, isCart: true } }],
        });
      }}
    >
      <View style={styles.itemRow}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: data.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemName}>{data.name}</Text>
          <TouchableOpacity
            style={styles.descriptionToggle}
            onPress={toggleDescription}
          >
            {!isAvtiveDescription && (
              <AntDesign name="down" size={18} color="black" />
            )}
            {isAvtiveDescription && (
              <AntDesign name="up" size={18} color="black" />
            )}
          </TouchableOpacity>
          {isAvtiveDescription && (
            <View style={styles.descriptionContainer}>
              
            </View>
          )}
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [
                    { name: "ItemDetail", params: { data: data, isCart: true } },
                  ],
                });
              }}
            >
              <Text style={styles.actionText}>Chỉnh Sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.actionText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => {
              if (quantity - 1 >= 1) setQuantity(quantity - 1);
            }}
          >
            <AntDesign name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <AntDesign name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountText}>
            {(data.price * quantity).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
              minimumFractionDigits: 0,
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  imageContainer: {
    height: 120,
    width: "33%",
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    marginTop: 10,
    width: "60%",
    position: "relative",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionToggle: {
    alignItems: "flex-end",
    width: "100%",
    paddingRight: 10,
    marginTop: -5,
  },
  descriptionContainer: {
    height: 50,
  },
  actionsContainer: {
    position: "absolute",
    bottom: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginLeft: 10,
  },
  actionText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  quantityContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    paddingRight: 10,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  totalAmountContainer: {
    alignItems: "flex-end",
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ItemCart;
