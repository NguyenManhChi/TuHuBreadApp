import { StyleSheet, Text, View ,FlatList, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const Detail = ({data},{navigation}) => {
  return (
    <FlatList
            style={styles.footer}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            
            renderItem={({ item }) => (
              <View style={styles.rowContainer}>
                <TouchableOpacity style={styles.contentBig}>
                  <View style={styles.contentItem}>
                    <Image
                      source={item.img}
                      style={styles.imgcontent}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.prcieContent}>
                    <View style={{ width: "100%" }}>
                      <Text style={styles.TextItemcontent}>{item.Text}</Text>
                    </View>
                    <View style={styles.BottomPrice}>
                      <Text style={styles.TextPrice}>đ {item.Price}</Text>
                      <TouchableOpacity>                     
                        <AntDesign name="plussquare" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            
          />
  )
}

export default Detail

const styles = StyleSheet.create({
    footer: {
        flexDirection: "column",
        gap: 6,
      },
      rowContainer: {
        backgroundColor: "#ffff",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#e6e6e6",

      },
      contentItem: {
      },
      contentBig: {
        backgroundColor: "#ffff",
        flexDirection: "row",
        flex: 1,
      },
      BottomPrice:{
        flexDirection: "row",
        justifyContent: "space-between",

      },
      prcieContent: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingVertical: 5,
        flex:1,
      },
      TextItemcontent: {
        fontSize: 17,
        alignContent: "center",
      },

      imgcontent: {
        width: 100,
        height: 100,
      },
      TextPrice: {
        fontSize: 15,
        fontWeight: "bold",
      },



})