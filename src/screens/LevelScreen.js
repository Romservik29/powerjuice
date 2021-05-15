import React from "react";
import { Image, View, LinearGradient } from "react-native";
import styled from "styled-components";
import { Container } from "../components/util/Container";
import { LinearProgress } from "react-native-elements";
import StoryContainer from "../components/StoryContainer";

export default function LevelScreen({ navigatoin, route }) {
  return (
    <Container>
      <StoryContainer>
        <View style={{ display: "flex", alignItems: "center" }}>
          <View
            style={{ display: "flex", alignItems: "center", paddingTop: 50 }}>
            <Image
              source={require("../img/Ellipse.png")}
              style={{ width: 250, height: 250 }}
            />
            <Level>LEVEL {route.params.level}</Level>
          </View>
          <LinearProgress
            color='red'
            variant='determinate'
            value={route.params.progress}
            style={{ height: 10, width: "80%" }}
          />
        </View>
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
