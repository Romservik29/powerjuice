import React, { useContext, useEffect, useState } from "react";
import StoryContainer from "../components/StoryContainer";
import { Container } from "../components/util/Container";
import Close from "../components/util/Close";
import { NextButton } from "../components/util/NextButton";
import { Alert, Animated, Text, View } from "react-native";
import { AnswerButton } from "../components/util/AnswerButton";
import { AnswerText } from "../components/util/AnswerText";
import questions from "../questions.json";
import { LanguageContext, PointsContext } from "../../App";
import { LinearProgress } from "react-native-elements/";
import language from "../../language";

export default function TestScreenPing({ navigation, route }) {
  const { lang } = useContext(LanguageContext);
  const { points, setPoints } = useContext(PointsContext);
  const { question, level } = route.params;
  const [answered, setAnswered] = useState(false);
  const [array, setArray] = useState(
    questions[lang].questions.levels[level][question]
  );
  {
    console.log(array);
  }
  const handlePress = (answer) => {
    if (answered === false) {
      setAnswered(true);
      setArray({ ...array, answer });
      if (array.correct.search(answer) >= 0)
        setPoints(
          points + questions[lang].questions.levels[level][question].points
        );
    }
  };
  const springValue = new Animated.Value(0.85);
  useEffect(() => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Container color='dark'>
      <Close navigation={navigation} />
      <View
        style={{
          height: 60,
          width: "100%",
          paddingTop: 10,
          alignItems: "center",
        }}>
        <View
          style={{
            width: "80%",
            height: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{ color: "orange" }}>
            {language.Question[lang]} {(level - 2) * 3 + question + 1}/9
          </Text>
          <Text style={{ color: "orange" }}>{points}</Text>
        </View>
        <LinearProgress
          color='red'
          variant='determinate'
          value={((level - 2) * 3 + question + 1) / 9}
          style={{ height: 10, width: "80%" }}
        />
      </View>
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
              {questions[lang].questions.levels[level][question].question}
            </AnswerText>
          </Animated.View>
          <View>
            {array.answers.map((a) => (
              <AnswerButton
                key={a}
                onPress={() => handlePress(a)}
                title={a}
                color={a !== array.answer ? "#383B8FAB" : "light"}
                bgColor={
                  a !== array.answer
                    ? "white"
                    : array.correct.search(array.answer ?? "") >= 0
                    ? "#30B073"
                    : "#D81A48"
                }
              />
            ))}
          </View>
        </View>
      </StoryContainer>
      <NextButton
        title={language.Next[lang]}
        color='#383B8F'
        width='150px'
        flexDirection='row'
        onPress={() => {
          const isNext =
            question < questions[lang].questions.levels[level].length - 1;
          let newQuestion = route.params.question;
          if (question < questions[lang].questions.levels[level].length - 1) {
            newQuestion = route.params.question + 1;
          } else {
            newQuestion = 0;
          }
          if (answered) {
            if (array.fact === undefined) {
              if (
                question <
                questions[lang].questions.levels[level].length - 1
              ) {
                navigation.push("TestScreenPing", {
                  question: newQuestion,
                  level,
                });
              } else
                navigation.push("LevelScreen", {
                  level,
                  progress: ((level - 2) * 3 + question + 1) / 9,
                  question: newQuestion,
                  isNext,
                });
            } else {
              navigation.push("InterestingFact", {
                progress: ((level - 2) * 3 + question + 1) / 9,
                question: newQuestion,
                fact: array.fact,
                isNext,
                level,
              });
            }
          } else {
            Alert.alert("Choose your answer!");
          }
        }}
      />
    </Container>
  );
}
