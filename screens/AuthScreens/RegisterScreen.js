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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password);
    auth?.currentUser.updateProfile({
      displayName: fullName,
    });
  };

  return (
    <View style={registerStyles.container}>
      <Text style={registerStyles.title}>Register</Text>
      <View style={registerStyles.textInputContainer}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#777777"
          value={fullName}
          onChangeText={(userName) => setFullName(userName)}
          style={registerStyles.textInput}
          autoCorrect={false}
        />
      </View>
      <View style={registerStyles.textInputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#777777"
          value={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          style={registerStyles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCompleteType="email"
          textContentType="emailAddress"
        />
      </View>
      <View style={registerStyles.textInputContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777777"
          value={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          style={registerStyles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="password"
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <View style={registerStyles.textInputContainer}>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#777777"
          value={confirmPassword}
          onChangeText={(userConfirmation) =>
            setConfirmPassword(userConfirmation)
          }
          style={registerStyles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="password"
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={register}>
        <View style={registerStyles.registerButton}>
          <Text style={registerStyles.registerText}>Register</Text>
        </View>
      </TouchableOpacity>
      <Text style={registerStyles.question}>
        Already have an account?{" "}
        <Text
          style={registerStyles.redirect}
          onPress={() => navigation.navigate("Login")}
        >
          Login!
        </Text>
      </Text>
      <StatusBar style="light" />
    </View>
  );
};

export default LoginScreen;

const registerStyles = StyleSheet.create({
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
    marginBottom: hp(10),
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
  registerButton: {
    backgroundColor: "#EF802F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: wp(80),
    height: hp(6.4),
    marginVertical: hp(2.16),
  },
  registerText: {
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
