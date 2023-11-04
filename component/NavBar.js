import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Text, Image, View } from "react-native";
import LoginScreen from "../screen/LoginScreen";
import SignUpScreen from "../screen/SignUpScreen";
import HomeScreen from "../screen/HomeScreen";
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export class NavBar extends React.Component {
  render() {
    return (
      <Tab.Navigator
       
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="home" size={24} color={focused ? "red" : "#000000"} />
                {/* <Image
                  source={require("../assets/icon.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "red" : "#000000",
                  }}
                /> */}
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icon.png")}
                  resizeMode="contain"
                  style={{
                    width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? "red" : "#000000",
                  }}
                />
                <Text
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Thực đơn
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default NavBar;

