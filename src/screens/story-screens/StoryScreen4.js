import React, { useContext } from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import { LanguageContext } from "../../../App";
import language from "../../../language";
import StoryContainer from "../../components/StoryContainer";
import { Container } from "../../components/util/Container";
import { MyButton } from "../../components/util/MyButton";
import { StoryText } from "../../components/util/StoryText";

const StoryScreen4 = ({ navigation }) => {
  const {lang} = useContext(LanguageContext);

  return (
    <View>
      <Container color='dark'>
        <StoryContainer>
          <Image source={require("../../img/mother-nature.png")} />
            <StoryText style={{margin: 20}}>
              {language.Story4[lang]}
            </StoryText>
            <MyButton
              title={language.I_m_ready[lang]}
              color='#383B8F'
              width='250px'
              height='50px'
              onPress={() =>
                navigation.navigate("LevelScreen", { level: 1, question: 0, progress: 0.3 })
              }
            />
        </StoryContainer>
      </Container>
    </View>
  );
};
export default StoryScreen4;
