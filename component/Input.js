import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = ({ placeholder, keyboard, textContent,secureTextEntry }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboard}
        secureTextEntry={secureTextEntry}
        returnKeyType="done"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    padding: 17,
    backgroundColor: "#f6f6f6",
    borderRadius: 25,
    marginVertical: 10,
  },
});
