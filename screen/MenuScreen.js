import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "../screen/LoginScreen";
import SignUpScreen from "../screen/SignUpScreen";

const MenuScreen = ({navigation}) => {
  return (
    <SafeAreaView>
         <View className=" mx-5 flex-initial min-h-fit">
        <Text className="text-4xl font-semibold text-left">Bắt đầu</Text>
        <View className=" pt-4 flex-row gap-2">
          <TouchableOpacity onPress={()=> navigation.navigate("LoginScreen")}>
            <Text className="text-xl font-medium text-left">Đăng nhập</Text>
          </TouchableOpacity>
          <Text className="text-xl font-medium text-left"> / </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("SignUpScreen")}>
            <Text className="text-xl font-medium text-left">Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MenuScreen

const styles = StyleSheet.create({})