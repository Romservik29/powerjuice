import React, { useEffect, useState } from "react";
import StoryContainer from "../components/StoryContainer";
import { Container } from "../components/util/Container";
import Close from "../components/util/Close";
import { NextButton } from "../components/util/NextButton";
import { Alert, Animated, View } from "react-native";
import { AnswerButton } from "../components/util/AnswerButton";
import { AnswerText } from "../components/util/AnswerText";

export default function TestScreen({ navigation }) {
  const [answered, setAnswered] = useState(false);
  const handlePress = () => {
    setAnswered(true);
  };
  const springValue = new Animated.Value(0.85);
  useEffect(() => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true 
    }).start();
  }, []);

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
            <AnswerButton
              disabled={answered}
              onPress={handlePress}
              title='Answer'
            />
            <AnswerButton
              disabled={answered}
              onPress={handlePress}
              title='Answer'
            />
            <AnswerButton
              disabled={answered}
              onPress={handlePress}
              title='Answer'
            />
            <AnswerButton
              disabled={answered}
              onPress={handlePress}
              title='Answer'
            />
          </View>
        </View>
      </StoryContainer>
      <NextButton
        title='NEXT'
        color='#383B8F'
        width='150px'
        flexDirection='row'
        onPress={() => navigation.navigate("TestScreen")}
      />
    </Container>
  );
}
