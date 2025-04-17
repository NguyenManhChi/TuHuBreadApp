import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Input from "../component/Input";
import Button from "../component/button/Button";
import { useNavigation } from "@react-navigation/native";

const InputText = [
  {
    placeholder: "Email",
    keyboard: "email-address",
    textContent: "emailAddress",
    secureTextEntry: false,
  },
  {
    placeholder: "Password",
    keyboard: "default",
    textContent: "password",
    secureTextEntry: true,
  },
];
const LoginScreen = ({navigation}) => {

  return (
    <View style={{ position: "relative" }}>
      <Image
        source={require("../assets/TuHu.jpg")}
        style={styles.imgback}
        resizeMode="cover"
      />
      <View>
        <KeyboardAvoidingView
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: 3500
            // flex: 1
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            style={[
              styles.backgroundLogin,
              {
                padding: 20,
              },
            ]}
            keyboardShouldPersistTaps="always"
          >
            <View>
              <Text style={styles.TexTitle}>Login to your account</Text>
            </View>
            <View>
              {InputText.map((input, index) => (
                <Input
                  key={index}
                  placeholder={input.placeholder}
                  keyboard={input.keyboard}
                  textContent={input.textContent}
                  secureTextEntry={input.secureTextEntry}
                />
              ))}
            </View>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text>Forgot your password?</Text>
            </TouchableOpacity >
            <Button textButton={"Login"} onPress={()=> navigation.navigate("NavBar")} />
            <View style={styles.signUp}>
              <Text style={{ color: "#c5c7d0" }}>Don't have an account?</Text>
              <TouchableOpacity onPress={()=> navigation.navigate("SignUpScreen")}>
                <Text style={styles.btnSignUp}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  modalCT: {},
  backgroundLogin: {
    backgroundColor: "#fff",
    marginTop: "100%",
    padding: 20,
    height: "100%",
    borderRadius: 20,
  },
  imgback: {
    position: "absolute",
    top: 0,
  },
  TexTitle: {
    fontSize: 21,
    fontWeight: "bold",
  },
  forgotPassword: {
    left: "55%",
  },
  signUp: {
    paddingTop: 10,
    paddingLeft: "22%",
    paddingVertical: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  btnSignUp: {
    color: "#ff0751",
  },
});
