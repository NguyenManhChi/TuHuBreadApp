import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import Button from "./button/Button";

const ItemCartDetail = ({ route }) => {
	const { selectedItem } = route.params;
	const item = route.params.data;
	const isCart = route.params.isCart;
	const [quantity, SetQuantity] = useState(selectedItem.quantity);
	const setCartData = async (data, quantity) => {
		try {
			let cart = await AsyncStorage.getItem("cartData");
			cart = cart ? JSON.parse(cart) : [];
			const indexToUpdate = cart.findIndex(
				(selectedItem) => selectedItem.name === data.name
			);

			if (indexToUpdate !== -1) {
				data.quantity = quantity;
				cart[indexToUpdate] = { ...cart[indexToUpdate], ...data };

				await AsyncStorage.setItem("cartData", JSON.stringify(cart));

				Alert.alert("Sửa thành công");
			}
		} catch (e) {
			console.log("Lỗi lưu data local: " + e.message);
		}
	};

	const addCartData = async (data) => {
		try {
			let cart = await AsyncStorage.getItem("cartData");
			cart = cart ? JSON.parse(cart) : [];

			const existingItemIndex = cart.findIndex(
				(selectedItem) => selectedItem.name === data.name
			);

			if (existingItemIndex !== -1) {
				cart[existingItemIndex].quantity += 1;
			} else {
				cart = [...cart, { ...data, quantity: 1 }];
			}

			await AsyncStorage.setItem("cartData", JSON.stringify(cart));

			Alert.alert("Thêm món ăn thành công");
		} catch (e) {
			console.log("Lỗi lưu data local: " + e.message);
		}
	};

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={selectedItem.image} />
			<View style={styles.ProductText}>
				<Text style={styles.TextProduct}>{selectedItem.Text}</Text>
			</View>
			<View style={styles.TextBig}>
				{/* Display other details based on selectedItem */}
				<Text style={styles.TextChiTiet}>
					Tuhu bữa chính đầy đủ dưỡng chất và no bụng: tùy chọn 1 bánh mì & 1
					cặp sandwich phomai & 1 đồ uống bất kỳ.{" "}
				</Text>
				<Text style={styles.TexPrice}>
					{parseFloat(selectedItem.Price).toLocaleString("vi-VN", {
						style: "currency",
						currency: "VND",
						minimumFractionDigits: 0,
					})}
				</Text>
			</View>
			{/* <View style={styles.AddCart}>
      <Button
          textButton={"Thêm Vào Giỏ Hàng"}
          style={styles.AddCartText}
          onPress={() => {
            addCartData(selectedItem);
          }}
        />
        </View> */}
			{isCart && (
				<View style={styles.containert}>
					<View style={styles.quantityContainer}>
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
				</View>
			)}

			<View
				style={{
					...styles.addToCartButton,
					marginTop: 100,
					backgroundColor: "red",
				}}
			>
				{!isCart && (
					<TouchableOpacity
						style={styles.addCartButton}
						onPress={() => {
							addCartData(selectedItem);
						}}
					>
						<Text style={styles.buttonText}>Thêm vào giỏ</Text>
					</TouchableOpacity>
				)}
				{isCart && (
					<TouchableOpacity
						style={styles.confirmButton}
						onPress={() => {
							setCartData(item, quantity);
							navigation.reset({
								index: 0,
								routes: [{ name: "OrderScreen", params: { data: "ok" } }],
							});
						}}
					>
						<Text style={styles.buttonText}>Xác Nhận</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containert: {
		marginTop: -8,
	},
	quantityContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 1,
	},
	quantityButton: {
		height: 8,
		width: 8,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 50,
	},
	quantityText: {
		fontSize: 20,
	},
	addToCartButton: {
		width: "70%",
		height: 70,
		backgroundColor: "#ccc", // Use your desired background color
		borderRadius: 70,
		justifyContent: "center",
		margin: 60,
	},
	addCartButton: {
		alignItems: "center",
	},
	confirmButton: {
		alignItems: "center",
		width: "70%",
		height: 70,
		backgroundColor: "red", // Use your desired background color
		borderRadius: 20,
		justifyContent: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
	},
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
	AddCart: {
		marginTop: 100,
		padding: 30,
	},
	AddCartText: {},
});

export default ItemCartDetail;
