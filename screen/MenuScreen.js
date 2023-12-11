    import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    } from "react-native";
    import React from "react";
    import { useNavigation } from "@react-navigation/native";
    import LoginScreen from "../screen/LoginScreen";
    import SignUpScreen from "../screen/SignUpScreen";
import { faAddressCard, faBars, faClockRotateLeft, faGear, faGears, faHome, faHouse, faMoneyBillTransfer, faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
import Item from "../component/Item";
import IntroductionScreen from "./IntroductionScreen";
import Profile from "../component/Profile";
    
    const products = [
        {
            icon: faQuestion,
            nameProduct: 'Giới Thiệu',
            click: "IntroductionScreen",
        },
        
        {
            icon: faGear,
            nameProduct: 'Cài Đặt',
            click: "Profile",
        },
        {
            icon: faUser,
            nameProduct: 'Đăng Nhập',
            click: "LoginScreen",

        },
        {
            icon: faAddressCard,
            nameProduct: 'Đăng Ký',
            click: "SignUpScreen",
        },

    ];
    const MenuScreen = ({ navigation }) => {

        return (
            <SafeAreaView >
                
                <ScrollView style={styles.container}>
                    {
                        products.map((product,index) => (
                            <Item key={index} icon={product.icon} name={product.nameProduct}  click={()=> navigation.navigate(product.click )}/>
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        )
    };

    export default MenuScreen;

    const styles = StyleSheet.create({});
