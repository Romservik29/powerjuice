import React from "react";
import { Text, StyleSheet, View } from "react-native";

const IntroScreen = () => {
    const name = 'Kayle Robson';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.textSub}>Hi from {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    textSub: {
        fontSize: 20
    }
});

export default Intro;
