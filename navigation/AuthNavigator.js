import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/AuthScreens/RegisterScreen";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "../screens/LandingScreen";

const Auth = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Auth.Screen name="Landing" component={LandingScreen} />
        <Auth.Screen name="Login" component={LoginScreen} />
        <Auth.Screen name="Register" component={RegisterScreen} />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
