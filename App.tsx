import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigation from "./navigation/MainNavigation";
import AuthNavigation from "./navigation/AuthNavigation";
import SignUpFlow from "./navigation/SignUpFlow";

const AppStack = createStackNavigator();

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
    </AppStack.Navigator>

    {/*   Auth Stack  */}
    {/* <SignUpFlow /> */}
  </NavigationContainer>
);

export default App;
