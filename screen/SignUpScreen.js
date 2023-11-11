import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../component/button/Button";
import Input from "../component/Input";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const goBack = () => {
    navigation.pop();
  };
  const InputText = [
    {
      placeholder: "Username",
      keyboard: "default",
      secureTextEntry: false,
      value: username,
      setVal: setUsername,
    },
    {
      placeholder: "Password",
      keyboard: "default",
      secureTextEntry: true,
      value: password,
      setVal: setPassword,
    },

    {
      placeholder: "Phone",
      keyboard: "numeric",
      secureTextEntry: false,
      value: phone,
      setVal: setPhone,
    },
    {
      placeholder: "Email",
      keyboard: "email-address",
      secureTextEntry: false,
      value: email,
      setVal: setEmail,
    },
  ];
  const handleSignUp = () => {
    Alert.alert(
      "Account Created",
      "You have successfully created an account.",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.biggest}>
      <View style={styles.container}>
        <AntDesign name="arrowleft" size={50} color="black" onPress={goBack} />
        <View style={styles.contentContainer}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          {InputText.map((input, index) => (
            <Input
              key={index}
              placeholder={input.placeholder}
              keyboard={input.keyboard}
              textContent={input.textContent}
              secureTextEntry={input.secureTextEntry}
            />
          ))}
          <Button textButton={"SIGN UP"} onPress={()=> navigation.navigate("NavBar")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  biggest:{
    backgroundColor: "#ffff",
  },
  container: {
    // flex: 1,

    justifyContent: "center",
    paddingHorizontal: 20,
  },
  contentContainer: {
    marginTop: "25%",
  },
  contentTitle: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignUpScreen;
