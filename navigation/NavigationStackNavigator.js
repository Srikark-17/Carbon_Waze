import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NavigationScreen from "../screens/MainScreens/NavigationScreen";

const App = createStackNavigator();

const NavigationStackNavigator = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Home" component={NavigationScreen} />
    </App.Navigator>
  );
};

export default NavigationStackNavigator;
