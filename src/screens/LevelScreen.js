import React from "react";
import { Image, View, Pressable } from "react-native";
import styled from "styled-components";
import { Container } from "../components/util/Container";
import { LinearProgress } from "react-native-elements";
import StoryContainer from "../components/StoryContainer";

export default function LevelScreen({ navigation, route }) {
  return (
    <Container color="dark">
      <StoryContainer>
        <Pressable onPress={() => navigation.navigate("TestScreen")}>
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
                style={{ width: 250, height: 250, margin: 20}}
              />
          </View>
        </Pressable>
      </StoryContainer>
    </Container>
  );
}

const Level = styled.Text`
  color: #f2a323;
  font-size: 40px;
  font-weight: 900;
  font-weight: bold;
  padding: 20px;
`;
