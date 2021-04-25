import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SustainableScreen from "../screens/MainScreens/SustainableScreen";

const App = createStackNavigator();

const SustainableGroceriesNavigator = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Home" component={SustainableScreen} />
    </App.Navigator>
  );
};

export default SustainableGroceriesNavigator;
