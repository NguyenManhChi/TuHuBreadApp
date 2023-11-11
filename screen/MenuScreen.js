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
    
    const products = [
        {
            icon: faQuestion,
            nameProduct: 'Giới Thiệu',
            click: "LoginScreen",
        },
        {
            icon: faClockRotateLeft,
            nameProduct: 'History',
            click: "LoginScreen",
        },
        {
            icon: faGear,
            nameProduct: 'Setting',
            click: "LoginScreen",
        },
        {
            icon: faUser,
            nameProduct: 'Login',
            click: "LoginScreen",

        },
        {
            icon: faAddressCard,
            nameProduct: 'Sign Up',
            click: "SignUpScreen",
        },

    ];
    const MenuScreen = ({ navigation }) => {

        return (
            <SafeAreaView >
                
                <ScrollView style={styles.container}>
                    {
                        products.map((product,index) => (
                            <Item key={index} icon={product.icon} name={product.nameProduct}  click={()=> navigation.navigate( product.click)}/>
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        )
    };

    export default MenuScreen;

    const styles = StyleSheet.create({});
