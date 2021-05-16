import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Close({ navigation }) {
  return (
    <Icon
      name='closecircleo'
      onPress={() => navigation.navigate("HomeScreen")}
      color="white"
      style={styles.close}
    />
  );
}

const styles = StyleSheet.create({
  close: {
    position: "absolute",
    top: 5,
    right: 5,
    fontSize: 25,
  },
});
