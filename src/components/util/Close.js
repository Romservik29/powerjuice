import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Close({ navigation, color }) {
  return (
    <Icon
      name='closecircleo'
      onPress={() => navigation.navigate("HomeScreen")}
      color={color ?? "white"}
      style={styles.close}
    />
  );
}

const styles = StyleSheet.create({
  close: {
    position: "absolute",
    top: 20,
    right: 10,
    fontSize: 30,
  },
});
