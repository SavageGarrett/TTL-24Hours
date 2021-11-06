import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
    Text,
    TouchableOpacity,
} from "react-native";
import { Icon } from "../components";
import styles, { WHITE } from "../assets/styles";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <TouchableOpacity 
        style={styles.roundedButton}
        onPress={() => loginWithRedirect()}
    >
        <Icon name="chatbubble" size={20} color={WHITE} />
        <Text style={styles.textButton}>Log In</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;