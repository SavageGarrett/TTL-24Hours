import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Activity, Profile } from "../screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "../assets/styles";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

/* Navigation Selector Once Logged in */
const MainNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: DARK_GRAY,
        labelStyle: {
          fontSize: 14,
          textTransform: "uppercase",
          paddingTop: 10,
        },
        style: {
          backgroundColor: WHITE,
          borderTopWidth: 0,
          marginBottom: 0,
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowColor: BLACK,
          shadowOffset: { height: 0, width: 0 },
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName="search" text="Explore" />
          ),
        }}
      />

      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName="heart" text="Matches" />
          ),
        }}
      />

      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              iconName="list-outline"
              text="Activity"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName="person" text="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
