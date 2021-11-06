import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../../components";
import styles, { DARK_GRAY } from "../../assets/styles";
import LoginButton from "../../components/LoginButton";

interface IProps {
  onNext: any;
}
const NextButton = ({ onNext }: IProps) => {
  return (
    <View
      style={{
        alignSelf: "center",
        position: "absolute",
        marginTop: "180%",
      }}
    >
      <TouchableOpacity onPress={onNext}>
        <View
          style={{
            justifyContent: "flex-end",
            alignContent: "flex-end",
          }}
        >
          <Text style={{ padding: 10 }}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
