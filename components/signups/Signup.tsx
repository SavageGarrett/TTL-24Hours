import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Icon, ProfileItem } from "../../components";
import styles, { WHITE } from "../../assets/styles";
import LoginButton from "../../components/LoginButton";
import NextButton from "./NextButton";
import { NavigationContainer } from "@react-navigation/native";
interface IProps {
  onNext: any;
  navigation: any;
}
const Signup = ({ onNext, navigation }: IProps) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={styles.bg}
      >
        <NextButton onNext={() => navigation.navigate("Activity")} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default withNavigation(Signup);
