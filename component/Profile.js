import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "../screen/ProfileScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
const titleText= [

    {
        titlename: "Tài Khoản"
    },
    {
        titlename: "Mật Khẩu"
    }
];


const Taikhoan = [

  {
    titlename:"Tài Khoản",
    placeholder: "Họ và Tên",
    keyboard: "default",
  },
  {
    placeholder: "Số Điện Thoại",
    keyboard: "number-pad",
    secureTextEntry: false,
  },
  {
    placeholder: "Nhập Email",
    keyboard: "email-address",
    secureTextEntry: false,
  },
];
const Matkhau = [

  {
    titlename:"Mật Khẩu",
    placeholder: "Nhập mật khẩu cũ",
    keyboard: "visible-password",
    secureTextEntry: true,
  },
  {
    placeholder: "Nhập mật khẩu mới",
    keyboard: "visible-password",
    secureTextEntry: true,
  },
  {
    placeholder: "Nhập lại mật khẩu",
    keyboard: "visible-password",
    secureTextEntry: true,
  },
];
const Profile = ({ route }) => {
  const defaultTab = route.params?.defaultTab || "Cập Nhật Tài Khoản";
  const navigation = useNavigation();
  const renderDetailScreen = (data) => () =>
    (
      <ProfileScreen
        data={data}
        titleText ={titleText}
        navigation={navigation}
      />
    );

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName={defaultTab}>
        <Tab.Screen
          name="Cập Nhật Tài Khoản"
          component={renderDetailScreen(Taikhoan)}
        />
        <Tab.Screen
          name="Đổi Mật Khẩu"
          component={renderDetailScreen(Matkhau)}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({});
