import React, { useContext } from "react";
import { Button, Image, Text } from "react-native";
import { LanguageContext, PointsContext } from "../../App";
import language from "../../language";
import StoryContainer from "../components/StoryContainer";
import { Container } from "../components/util/Container";
import { MyButton } from "../components/util/MyButton";
import { StoryText } from "../components/util/StoryText";

export default function FinalScoreScreen({ navigation }) {
  const { points } = useContext(PointsContext);
  const { lang } = useContext(LanguageContext);
  return (
    <Container color='orange'>
      <StoryContainer color='#FBCD84'>
        <Image
          source={require("../img/mother-happy.png")}
          style={{ width: 150, height: 150 }}
        />
        <StoryText fontSize='20px' style={{ padding: 30, width: 300 }}>
          {lang === "fr" ? "Votre score " : "Your score "}
          <Text style={{ color: "orange", fontWeight: "bold" }}>
            {points}
          </Text>
          {lang === "fr" ? "signifie que les robots sont maintenant au " : "means that the robots are now at " }
          <Text style={{ color: "orange", fontWeight: "bold" }}>
            {points < 80 ? "bad " : points < 125 ? "normal " : "very good "}
          </Text>
          {lang === "fr" ? "niveau de connaissances" :"knowledge level"}
        </StoryText>
        <MyButton
          width='150px'
          title={language.That_means[lang]}
          onPress={() => navigation.push("FinalMeanScreen")}
        />
      </StoryContainer>
    </Container>
  );
}
