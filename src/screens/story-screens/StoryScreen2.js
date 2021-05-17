import React, { useContext } from "react";
import { Text, View, Image } from "react-native";
import { LanguageContext } from "../../../App";
import language from "../../../language";
import StoryContainer from "../../components/StoryContainer";
import { Container } from "../../components/util/Container";
import { MyButton } from "../../components/util/MyButton";
import { StoryText } from "../../components/util/StoryText";

const StoryScreen2 = ({ navigation }) => {
  const {lang} = useContext(LanguageContext);

  return (
    <Container color='dark'>
      <StoryContainer>
        <Image source={require("../../img/robot.png")} />
        <StoryText style={{ margin: 20 }}>
        {language.Story2[lang]}
        </StoryText>
        <View style={{ flexDirection: "row", width: 250, justifyContent: 'space-around' }}>
          <MyButton
            title={language.Back[lang].toUpperCase()}
            color='#383B8F'
            width='100px'
            onPress={() => navigation.push("StoryScreen")}
          />
          <MyButton
            title={language.Next[lang].toUpperCase()}
            width='100px'
            onPress={() => navigation.push("StoryScreen3")}
          />
        </View>
      </StoryContainer>
    </Container>
  );
};
export default StoryScreen2;
