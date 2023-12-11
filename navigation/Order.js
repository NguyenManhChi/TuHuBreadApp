import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import OrderScreen from "../screen/OrderScreen";
import ItemCartDetail from "../component/ItemCartDetail";

const Stack = createNativeStackNavigator();
const First = () => {
  const route = useRoute();
  const params = route.params;
  return (
    <Stack.Navigator
      initialRouteName="CartList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OrderScreen" component={OrderScreen} initialParams={params}/>
      <Stack.Screen name="ItemCartDetail" component={ItemCartDetail} initialParams={params}/>
    </Stack.Navigator>
  );
};

export default First;
