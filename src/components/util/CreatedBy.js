import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function CreatedBy() {
  return (
    <View>
      <Text style={styles.createdBy}>Created by</Text>
      <Image source={require('../../img/logo.png')} />
      <View style={styles.teamNameContainer}>
        <Text style={styles.power}>
          Power
          <Text style={styles.juice}>JUICE</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  createdBy:{
    color: '#D81A48'
  },
  power: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#383B8F',
  },
  juice:{
    color: '#F2A323'
  }
});
