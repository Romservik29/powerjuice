import React, { useContext, useState } from "react";
import { Text, StyleSheet, Image, View, Alert } from "react-native";
import { Input } from "react-native-elements";
import { Container } from "../components/util/Container";
import { LanguageContext, NameContext } from "../../App";
import { MyButton } from "../components/util/MyButton";
import StoryContainer from "../components/StoryContainer";
import language from "../../language";
import color from "color";

const NameEntryScreen = ({ navigation }) => {
  const { username, setUsername } = useContext(NameContext);
  const { lang } = useContext(LanguageContext);
  const handleName = () => {
    if (username) {
      navigation.navigate("StoryScreen");
    }else{
      Alert.alert("Enter your name")
    }
  };
  return (
    <Container color='dark'>
      <Image style={styles.img} source={require("../img/mother-name.png")} />
      <StoryContainer>
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.textStyle}>
              {lang === "fr" ? "Quel est" : "What is"}
            </Text>
            <Text style={styles.textStyle}>
              <Text style={{ ...styles.textStyle, color: "orange" }}>
                {lang === "fr" ? "votre nom" : "your name"}
              </Text>
              ?
            </Text>
          </View>
          <View style={{ width: 200 }}>
            <Input
              inputContainerStyle={{ color: "red" }}
              maxLength={12}
              placeholder={language.Name_Here[lang]}
              onChangeText={setUsername}
              value={username}
            />
          </View>

          <MyButton
            width='200px'
            style={styles.btnGame}
            title={language.Begin_the_story[lang]}
            onPress={handleName}
          />
        </View>
      </StoryContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#383B8F",
  },
  textSub: {
    fontSize: 20,
  },
  img: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
    width: 175,
    height: 175,
  },
});

export default NameEntryScreen;
