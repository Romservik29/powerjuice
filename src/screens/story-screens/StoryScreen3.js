import React, { useContext } from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import { LanguageContext } from "../../../App";
import language from "../../../language";
import StoryContainer from "../../components/StoryContainer";
import { Container } from "../../components/util/Container";
import { MyButton } from "../../components/util/MyButton";
import { StoryText } from "../../components/util/StoryText";

const StoryScreen3 = ({ navigation }) => {
  const {lang} = useContext(LanguageContext);

  return (
    <Container color="dark">
      <StoryContainer>
        <Image source={require("../../img/mother-nature.png")} />
          <StoryText style={{ margin: 20 }}>
          Nous devons rafraîchir les cerveaux électroniques pour qu'ils aient la capacité de prendre les meilleures décisions.
          </StoryText>
          <View
            style={{
              flexDirection: "row",
              width: 250,
              justifyContent: "space-around",
            }}>
            <MyButton
              title={language.Back[lang].toUpperCase()}
              color='#383B8F'
              width='100px'
              flexDirection='row'
              onPress={() => navigation.navigate("StoryScreen2")}
            />
            <MyButton
              title={language.Next[lang].toUpperCase()}
              width='100px'
              flexDirection='row'
              onPress={() => navigation.navigate("StoryScreen4")}
            />
          </View>
      </StoryContainer>
    </Container>
  );
};
export default StoryScreen3;
