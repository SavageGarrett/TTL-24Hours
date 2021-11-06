import React, { useState } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const MoreDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setShowDetails(true)}>
        <View>
          <Text>More Details</Text>
        </View>
      </TouchableOpacity>
      {/* 
      <Modal visible={showDetails} onRequestClose={() => setShowDetails(false)}>
        <View style={styles.modal}>
          <Text>Hello</Text>
        </View>
      </Modal> */}
    </View>
  );
};

export default MoreDetails;
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    padding: 20,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    height: 300,
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 80,
    marginLeft: 40,
  },
});
