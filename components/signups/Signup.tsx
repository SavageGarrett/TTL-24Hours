import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon, ProfileItem } from "../../components";
import styles, { WHITE } from "../../assets/styles";
import LoginButton from "../../components/LoginButton";
import NextButton from "./NextButton";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  onNext: any;
}
const Signup = ({ onNext }: IProps) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={styles.bg}
      >
        <NextButton onNext={() => navigation.navigate("Tab")} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;
