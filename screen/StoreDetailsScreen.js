import React from 'react';
import {StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { openURL } from 'react-native-open-url';
import { Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const StoreDetailsScreen = ({ route }) => {
  const { selectedItem } = route.params;

  const handleOpenMap = () => {
    const { latitude, longitude } = selectedItem.coordinates;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    Linking.openURL(url)
      .then((opened) => {
        if (opened) {
          console.log('URL opened successfully');
        } else {
          console.log('URL opening failed');
        }
      })
      .catch((error) => {
        console.error('Error opening URL:', error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f5f8" }}>
      
      <View style={{ padding: 16 }}>
        <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text style={{ fontSize: 20, paddingBottom: 20, color: "red", fontWeight: "bold" }}>
          {" "}
          {selectedItem.name}
        </Text>
        </View>
        <Text style={styles.textItem}>
          <AntDesign name="home" size={24} color="red" /> {selectedItem.address}
        </Text>
        <Text style={styles.textItem}>
          <Feather name="phone-call" size={24} color="red" /> Phone: {selectedItem.phone}
        </Text>
        <Text style={styles.textItem}>
          <AntDesign name="clockcircleo" size={24} color="red" /> Opening Hours: {selectedItem.openingHours}
        </Text>
      </View>
      <Button title="Mở Bằng Google Maps" onPress={handleOpenMap} />
      <MapView
        style={{ flex: 1 ,width: "90%", marginHorizontal: 20, }}
        initialRegion={{
          latitude: selectedItem.coordinates.latitude,
          longitude: selectedItem.coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={selectedItem.coordinates}
          title={selectedItem.name}
          description={selectedItem.address}
        />
      </MapView>
    </SafeAreaView>
  );
};
export default StoreDetailsScreen;
const styles = StyleSheet.create({
  location:{
    color: "black",
  },
  logo: {
    width: 130,
    height: "50%",
  },
});
