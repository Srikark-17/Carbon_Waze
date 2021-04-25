import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LoadingScreen = () => {
  return (
    <View style={loadingStyles.container}>
      <Image
        source={require("../assets/logo.jpeg")}
        style={loadingStyles.logo}
      />
      <StatusBar style="light" />
    </View>
  );
};

export default LoadingScreen;

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B3B3B",
  },
  logo: {
    width: wp(80),
    height: hp(30),
  },
});
