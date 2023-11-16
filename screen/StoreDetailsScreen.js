import React from 'react';
import {StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { openURL } from 'react-native-open-url';
import { Linking } from 'react-native';

const StoreDetailsScreen = () => {

  const storeInfo = {
    name: 'Cửa hàng TuHu Bread',
    address: 'Số 10  Phố Triều Khúc, Thanh Xuân, Hà Nội',
    phone: '0353051530',
    openingHours: '8:00 AM - 6:00 PM',
    coordinates: {
      latitude:  20.9865782, // Update with the correct latitude
    longitude:   105.7977008, 
    },
  };
  
  const handleOpenMap = () => {
    const { latitude, longitude } = storeInfo.coordinates;
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
      <View style={{alignItems: "center", justifyContent: "center", }}>
        <Text style={{fontSize: 24}}>Cửa Hàng</Text>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={styles.location}>{storeInfo.name}</Text>
        <Text style={styles.location}>{storeInfo.address}</Text>
        <Text style={styles.location}>Phone: {storeInfo.phone}</Text>
        <Text style={styles.location}>Opening Hours: {storeInfo.openingHours}</Text>
      </View>
      <Button title="Mở Bằng Google Maps" onPress={handleOpenMap} />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: storeInfo.coordinates.latitude,
          longitude: storeInfo.coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={storeInfo.coordinates}
          title={storeInfo.name}
          description={storeInfo.address}
        />
      </MapView>
      
    </SafeAreaView>
  );
};

export default StoreDetailsScreen;
const styles = StyleSheet.create({
  location:{
    color: "red",
  }
});
