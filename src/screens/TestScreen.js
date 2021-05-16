import React, { useEffect, useState } from "react";
import StoryContainer from "../components/StoryContainer";
import { Container } from "../components/util/Container";
import Close from "../components/util/Close";
import { NextButton } from "../components/util/NextButton";
import { Animated, View } from "react-native";
import { AnswerButton } from "../components/util/AnswerButton";
import { AnswerText } from "../components/util/AnswerText";

export default function TestScreen({ navigation }) {
  const [answered, setAnswered] = useState(false);
  const arr = {
    answers: ["TOXINS", "WATER", "OIL", "NOTHING"],
    correct: "TOXINS",
  };
  const [array, setArray] = useState(arr);
  const handlePress = (answer) => {
    setAnswered(true);
    array.answer = answer;
    setArray(array);
  };
  const springValue = new Animated.Value(0.85);
  useEffect(() => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, []);
  console.log(array);
  return (
    <Container color='dark'>
      <Close navigation={navigation} />
      <StoryContainer>
        <View
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Animated.View
            style={{
              width: 250,
              marginBottom: 15,
              transform: [{ scale: springValue }],
            }}>
            <AnswerText>
              On average how much does it cost to recycle your phone?
            </AnswerText>
          </Animated.View>
          <View>
            {array.answers.map((a) => (
              <AnswerButton
                key={a}
                disabled={answered}
                onPress={() => handlePress(a)}
                title={a}
                bgColor={
                  a !== array.answer
                    ? "white"
                    : array.answer === array.correct
                    ? "green"
                    : "red"
                }
              />
            ))}
            {console.log(array.answer === array.correct)}
          </View>
        </View>
      </StoryContainer>
      <NextButton
        title='NEXT'
        color='#383B8F'
        width='150px'
        flexDirection='row'
        onPress={() => navigation.navigate("InterestingFact")}
      />
    </Container>
  );
}
