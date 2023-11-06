import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

//* Item for ProductScreen, PointScreen, GiftScreen, UtilitiesScreen

const Item = ({icon,name,click}) => {
    return (
        <TouchableOpacity style={styles.point} onPress={click}>
            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'center',paddingHorizontal: 15,paddingVertical: 23}}>    
                <View style={{flexDirection: 'row', alignItems: 'center',width: '80%'}}>
                    <FontAwesomeIcon icon={icon} size={35} style={{color:"#ff0751"}}/>
                    <Text style={{fontSize: 16, marginLeft: 15,fontWeight: '600'}}>{name}</Text>
                </View>
                <View>
                    <FontAwesomeIcon icon={faChevronRight} size={16} style={{color:"#ff0751"}}/> 
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    point: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: '5%',
    },
})