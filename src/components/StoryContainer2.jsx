import React from "react";
import { StyleSheet, View } from "react-native";

export default function StoryContainer2() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.first}></View>
        <View style={styles.second}></View>
        <View style={styles.third}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  first: {
    height:'90%',
    width:'100%',
    borderRadius: 30,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 5,
  },
  second: {
    height:'95%',
    width:'100%',
    borderRadius: 20,
    backgroundColor: 'blue',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4,
  },
  third: {
    height:'100%',
    width:'80%',
    borderRadius: 10,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: 0,
    zIndex: 3,
  },
  container:{
      height:'100%',
      width:'100%',
  },
  inner:{
      position: 'relative',
      height: '85%',
      width: '90%'
  },
});
