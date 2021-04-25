import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LandingScreen = () => {
  return (
    <View style={homeStyles.container}>
      <Image source={require("../assets/logo.png")} style={homeStyles.logo} />
      <View style={homeStyles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={homeStyles.loginButton}>
            <Text style={homeStyles.authText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={homeStyles.registerButton}>
            <Text style={homeStyles.authText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default LandingScreen;

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: wp(100),
    height: hp(15),
    bottom: 40,
  },
  buttonContainer: {
    justifyContent: "space-between",
    height: hp(13.49),
  },
  loginButton: {
    width: wp(46.73),
    height: hp(5.4),
    borderRadius: 25,
    backgroundColor: "#EF802F",
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    width: wp(46.73),
    height: hp(5.4),
    borderRadius: 25,
    backgroundColor: "#FFCC57",
    alignItems: "center",
    justifyContent: "center",
  },
  authText: {
    fontSize: hp(1.94),
    fontFamily: "Avenir",
    color: "#FFF",
    fontWeight: "500",
  },
});
