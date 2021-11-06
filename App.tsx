import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigation from "./navigation/MainNavigation";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Login from "./screens/Login"
import profile_exists from "./api/profile_exists";

const Stack = createStackNavigator();

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(isAuthenticated);

  let activeComponent: {} | null | undefined;

  /* Check Authentication and Profile Creation Status */
  if (!isAuthenticated)
  {
    /* User is Not Logged in - Render Login Screen */
    activeComponent = <Login></Login>;
  }
  else if(isAuthenticated && !profile_exists)
  {
    /* User is Logged in, but hasn't created a profile - Render Create Profile Flow */
    
    /* TODO: Add Alli's Create Account Flow Here */
    /* activeComponent = <SignUpFlow></SignUpFlow> */
  }
  else
  {
    /* User is Logged in and Has Created a Profile - Render Regular App Flow */
    activeComponent = <MainNavigation></MainNavigation>
  }

  return (
    <Auth0Provider
      domain="ttl-24hours.us.auth0.com"
      clientId="XFn7nnXvPF2h39VbWgifdb8hv8WsySpQ"
      redirectUri={"https://localhost:19006"}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            options={{ headerShown: false, animationEnabled: false }}
          >
            {() => <Login></Login>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      
    </Auth0Provider>

    
  )
}

export default App;
