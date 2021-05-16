import React from "react";
import { Image, View, Pressable, Alert } from "react-native";
import styled from "styled-components";
import { Container } from "../components/util/Container";
import { LinearProgress } from "react-native-elements";
import questions from '../questions.json'

export default function LevelScreen({ navigation, route }) {
  return (
    <Container color='dark'>
      <Pressable
        onPress={() => {
          if (questions.questions.levels[route.params.level + 1])
            navigation.navigate("TestScreenPing", {
              question: 0,
              level: route.params.level + 1,
            })
            else{
              Alert.alert("Level not")
            }
        }}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Level>LEVEL {route.params.level}</Level>
          <LinearProgress
            color='red'
            variant='determinate'
            value={route.params.progress}
            style={{ height: 10, width: "80%" }}
          />
          <Image
            source={require("../img/earth.png")}
            style={{ width: 250, height: 250, margin: 20 }}
          />
        </View>
      </Pressable>
    </Container>
  );
}

const Level = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: 900;
  font-weight: bold;
  padding: 20px;
`;
