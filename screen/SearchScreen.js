import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
const bread = [
    {
      img: require("../assets/pic1.jpeg"),
      Text: "Bánh Mỳ Gà Nướng Sả",
      Price: "25,000",
    },
    {
      img: require("../assets/pic2.jpeg"),
      Text: "Bánh Mỳ Sốt Tiêu Đen",
      Price: "40,000",
    },
    {
      img: require("../assets/pic3.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm ",
      Price: "35,000",
    },
    {
      img: require("../assets/pic4.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm ",
      Price: "35,000",
    },
    {
      img: require("../assets/pic7.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm . ",
      Price: "35,000",
    },
    {
      img: require("../assets/pic8.jpeg"),
      Text: "Trà Tắc Khổng Lồ ",
      Price: "10,000",
    },
  ];
  const drink = [
    {
      img: require("../assets/pic8.jpeg"),
      Text: "Trà Tắc Khổng Lồ ",
      Price: "10,000",
    },
    {
      img: require("../assets/dink2.jpeg"),
      Text: "Trà Tắc Khổng Lồ ",
      Price: "10,000",
    },
    {
      img: require("../assets/dink3.jpeg"),
      Text: "Trà Tắc Khổng Lồ ",
      Price: "10,000",
    },
    {
      img: require("../assets/dink4.jpeg"),
      Text: "Trà Tắc Khổng Lồ ",
      Price: "10,000",
    },
  ];
  const combo = [
    {
      img: require("../assets/combo1.jpeg"),
      Text: "Bánh Mỳ Gà Nướng Sả",
      Price: "25,000",
    },
    {
      img: require("../assets/combo2.jpeg"),
      Text: "Bánh Mỳ Sốt Tiêu Đen",
      Price: "40,000",
    },
    {
      img: require("../assets/combo3.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm ",
      Price: "35,000",
    },
    {
      img: require("../assets/combo4.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm ",
      Price: "35,000",
    },
    {
      img: require("../assets/combo5.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm . ",
      Price: "35,000",
    },
    {
      img: require("../assets/combo6.jpeg"),
      Text: "Trà Tắc Khổng Lồ ",
      Price: "10,000",
    },
  ];
  const sanwich = [
    {
      img: require("../assets/sandwich1.jpeg"),
      Text: "Bánh Mỳ Gà Nướng Sả",
      Price: "25,000",
    },
    {
      img: require("../assets/sandwich2.jpeg"),
      Text: "Bánh Mỳ Sốt Tiêu Đen",
      Price: "40,000",
    },
    {
      img: require("../assets/sandwich3.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm ",
      Price: "35,000",
    },
    {
      img: require("../assets/sandwich4.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm ",
      Price: "35,000",
    },
    {
      img: require("../assets/sandwich5.jpeg"),
      Text: "Bánh Mỳ Sốt Bò Hầm . ",
      Price: "35,000",
    },
  ];
const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(bread); // Assuming 'bread' is the default data

  const handleSearch = () => {
    const newData = bread.filter((item) =>
      item.Text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
      />

      <FlatList
        style={{ flex: 1 }}
        data={bread}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, margin: 8 }}
            onPress={() => navigation.navigate('ProductDetailScreen', { item })}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, aspectRatio: 1 }}>
                <Image
                  source={item.img}
                  style={{ flex: 1, borderRadius: 8 }}
                  resizeMode="cover"
                />
              </View>
              <View style={{ padding: 8 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.Text}</Text>
                <Text style={{ fontSize: 14, color: 'green' }}>đ {item.Price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        numColumns={3}
      />
    </View>
  );
};



const styles = StyleSheet.create({
    footer: {
        flexDirection: "column",
        gap: 6,
      },
      rowContainer: {
        width: "33%",
      },
      contentItem: {},
      contentBig: {
        width: "100%",
        alignItems: "center",
      },
      prcieContent: {
        alignItems: "center",
        justifyContent: "space-around",
        padding: 5,
      },
      TextItemcontent: {
        alignContent: "center",
      },
      imgcontent: {
        width: 100,
        height: 100,
      },
      TextPrice: {
        fontWeight: "bold",
      },


});
export default SearchScreen;