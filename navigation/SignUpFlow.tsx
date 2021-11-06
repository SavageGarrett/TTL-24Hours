import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./AuthNavigation";

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

const SignUpFlow = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false, animationEnabled: false }}
      >
        <AuthNavigation />
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default SignUpFlow;
