import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "../component/Input";
import { SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../component/button/Button";

// const InputText = [
//   {
//     placeholder:"Họ và Tên",
//     keyboard: "default",

//   },
//   {
//     placeholder: "Số Điện Thoại",
//     keyboard: "default",
//     secureTextEntry: true,
//   },
//   {
//     placeholder: "Nhập Email",
//     keyboard: "email-address",
//     secureTextEntry: true,
//   },
// ];
const ProfileScreen = ({ data, navigation }) => {
	return (
		<SafeAreaView style={styles.biggest}>
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<View style={styles.contentTitle}></View>

					{data.map((item, index) => (
						<View key={index}>
							<Text style={styles.title}>{item.titlename}</Text>
							<Input
								key={item.titlename} // Ensure the Input component has a unique key as well
								placeholder={item.placeholder}
								keyboard={item.keyboard}
                secureTextEntry={item.secureTextEntry}
							/>
						</View>
					))}

					<Button
						textButton={"Cập Nhật Tài Khoản"}
						onPress={() => navigation.navigate("MenuScreen")}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	biggest: {
		backgroundColor: "#ffff",
	},
	container: {
		// flex: 1,

		justifyContent: "center",
		paddingHorizontal: 20,
	},
	contentContainer: {
		marginTop: "25%",
	},
	contentTitle: {
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "grey",
		paddingHorizontal: 10,
		paddingVertical: 8,
		marginBottom: 10,
		borderRadius: 5,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "blue",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
	},
});
