import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import LoginButton from "../components/LoginButton"

/* Auth0 Login Component Screen */
const Login = () => {

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <LoginButton></LoginButton>
    </ImageBackground>
  );
};

export default Login;
