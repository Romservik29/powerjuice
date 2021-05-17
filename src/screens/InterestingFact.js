import React from "react";
import { Image, Text } from "react-native";
import StoryContainer from "../components/StoryContainer";
import { Container } from "../components/util/Container";
import { MyButton } from "../components/util/MyButton";
import { StoryText } from "../components/util/StoryText";


export default function InterestingFact({ navigation, route }) {
  const { fact, level, progress, question, isNext } = route.params;
  const handleClick = () => {
    if (isNext){
        navigation.push("TestScreenPing", {                 
            question,
            level
          })
    }
    else navigation.push("LevelScreen", {
        progress,
        level,
        question,
        isNext
    });
  };
  return (
    <Container color='dark'>
      <StoryContainer>
        <Image
          source={require("../img/mother-fact.png")}
          style={{ width: 150, height: 150 }}
        />
        <StoryText style={{ padding: 30, height: 130 }}>
          {fact.map((text, index) => {
            return index % 2 === 0 ? (
              " "+text
            ) : (
              <Text key={index} style={{ color: "red" }}>
                {" "+text}
              </Text>
            );
          })}
        </StoryText>
        <MyButton
          width='200px'
          style={{ height: 100 }}
          title='CONTINUE'
          onPress={handleClick}
        />
      </StoryContainer>
    </Container>
  );
}
