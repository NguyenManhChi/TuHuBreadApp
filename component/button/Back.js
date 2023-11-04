import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Back = () => {
  return (
    <TouchableOpacity>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={this.loginWithFacebook}
      >
        Login with Facebook
      </Icon.Button>
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({});
