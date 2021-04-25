import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Login</Text>
      <View style={loginStyles.textInputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#777777"
          value={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          style={loginStyles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCompleteType="email"
          textContentType="emailAddress"
        />
      </View>
      <View style={loginStyles.textInputContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777777"
          value={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          style={loginStyles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="password"
          textContentType="password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => auth.signInWithEmailAndPassword(email, password)}
      >
        <View style={loginStyles.loginButton}>
          <Text style={loginStyles.loginText}>Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={loginStyles.question}>
        Don't have an account?{" "}
        <Text
          style={loginStyles.redirect}
          onPress={() => navigation.navigate("Register")}
        >
          Register here!
        </Text>
      </Text>
      <StatusBar style="light" />
    </View>
  );
};

export default LoginScreen;

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: hp(7),
    fontFamily: "Avenir",
    fontWeight: "bold",
    color: "#FFF",
    marginTop: hp(15),
    marginBottom: hp(15),
  },
  textInputContainer: {
    width: wp(80),
    height: hp(6.4),
    borderRadius: 12,
    paddingLeft: 15,
    justifyContent: "center",
    backgroundColor: "#2A2A2A",
    marginVertical: hp(1.08),
  },
  textInput: {
    color: "#FFCC57",
    fontFamily: "Avenir",
  },
  loginButton: {
    backgroundColor: "#EF802F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: wp(80),
    height: hp(6.4),
    marginVertical: hp(2.16),
  },
  loginText: {
    color: "#FFF",
    fontSize: hp(2.16),
    fontWeight: "600",
    fontFamily: "Avenir",
  },
  question: {
    color: "#FFF",
    fontFamily: "Avenir",
    fontSize: hp(1.8),
  },
  redirect: {
    fontFamily: "Avenir",
    color: "#FFCC57",
  },
});
