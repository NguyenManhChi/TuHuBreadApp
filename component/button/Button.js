import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({textButton,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textbtn}>{textButton}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        padding:15,
        backgroundColor:'#ff0751',
        borderRadius:25,
        marginVertical:20,
    },
    textbtn:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    }

})