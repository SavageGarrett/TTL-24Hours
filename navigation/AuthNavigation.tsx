import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
const Stack = createStackNavigator();

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
