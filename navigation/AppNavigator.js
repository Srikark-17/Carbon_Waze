import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import NewsScreen from "../screens/MainScreens/NewsScreen";
import SustainableGroceriesNavigator from "./SustainableGroceriesStack";
import NavigationStackNavigator from "./NavigationStackNavigator";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
const inactiveColor = "#8E8E8E";
const themecolor = "#2B2D2F";
const tabcolor = "#EF802F";
const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Navigation"
        sceneAnimationEnabled="true"
        activeColor={tabcolor}
        inactiveColor={inactiveColor}
        barStyle={{ backgroundColor: `${themecolor}`, bottomPadding: 10 }}
        shifting={true}
      >
        <Tab.Screen
          name="News Feed"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="newspaper"
                size={23}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Navigation"
          component={NavigationStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-search"
                size={26}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Sustainable Groceries"
          component={SustainableGroceriesNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-fast-food-sharp"
                size={25}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <App.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <App.Screen name="Home" component={NavigationScreen} />
    //   </App.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;
