import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation';
import NavBar from './component/NavBar';
import Detail from './screen/Detail';
import Product from './component/Product';
import OrderScreen from './screen/OrderScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
  const storeData = async (userName, passWord) => {
    try {
      await AsyncStorage.setItem("cartData", JSON.stringify([]));
    } catch (e) {
      console.log("Tuan: ");
    }
  };
  storeData();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppNavigator />
        {/* <OrderScreen/> */}
        {/* <Product/> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
