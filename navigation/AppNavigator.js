// AppNavigator.js

import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screen/Detail";
import ProductDetailScreen from "../screen/ProductDetailScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DetailScreen">
      {/* ... other screens */}
      <Stack.Screen name="DetailScreen" component={Detail} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
