import React, { useContext } from "react";
import { Alert, Image, Pressable, TouchableNativeFeedback } from "react-native";
import { Button, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LanguageContext } from "../../App";
import StoryContainer from "../components/StoryContainer";
import { Container } from "../components/util/Container";

export default function SelectLanguageScreen({ navigation }) {
  const { setLang } = useContext(LanguageContext);
  const handleClick = (flag) => {
    navigation.navigate("HomeScreen");
  };
  return (
    <Container color='orange'>
      <StoryContainer color='#FBCD84'>
        <Text style={{ fontWeight: "600", fontSize: 18 }}>
          Select your language:
        </Text>
        <TouchableNativeFeedback onPress={() => handleClick("en")}>
          <Image
            source={require("../img/en.png")}
            style={{ width: 100, height: 100, margin: 10 }}
          />
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={() => handleClick("fr")}>
          <Image
            source={require("../img/fr.png")}
            style={{ width: 100, height: 100, margin: 10 }}
          />
        </TouchableOpacity>
      </StoryContainer>
    </Container>
  );
}
