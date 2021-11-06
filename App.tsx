import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigation from "./navigation/MainNavigation";
import Signup from "./components/signups/Signup";

const AppStack = createStackNavigator();
const loggedIn = false;
const App = () => (
  // App Stack
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen
        name="Tab"
        options={{ headerShown: false, animationEnabled: false }}
      >
        {() => <MainNavigation></MainNavigation>}
      </AppStack.Screen>
      <AppStack.Screen
        options={{ headerShown: false, animationEnabled: false }}
        name="Signup"
        component={Signup}
      />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default App;
