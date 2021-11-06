import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Icon } from "../../components";
import { PRIMARY_COLOR } from "../../assets/styles";
import NextButton from "./NextButton";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

interface IProps {
  onNext: any;
}
const Signup = ({ onNext }: IProps) => {
  const navigation = useNavigation();
  const [image, setImage] = useState<string>();
  const [video, setVideo] = useState<string>();
  const [bio, setBio] = useState<string>();
  const [skills, setSkills] = useState<string>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setVideo(result.uri);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 50,
          paddingHorizontal: 70,
        }}
      >
        <TouchableOpacity onPress={pickImage} style={{ alignSelf: "center" }}>
          <View style={{ alignSelf: "center" }}>
            <Icon name="camera" size={50} color={PRIMARY_COLOR} />
            <Text> Upload your photo </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickVideo}>
          <Icon name="camera" size={50} color={PRIMARY_COLOR} />
          <Text> Upload your video </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSkills(text)}
          value={skills}
          placeholder="Skills"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBio(text)}
          value={bio}
          placeholder="Bio"
        />
      </View>

      <NextButton onNext={() => navigation.navigate("Tab")} />
    </SafeAreaView>
  );
};

export default Signup;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
