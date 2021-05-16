import React, { useContext, useState } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Input } from "react-native-elements";
import { Container } from "../components/util/Container";
import { NameContext } from "../../App";
import { MyButton } from "../components/util/MyButton";
import StoryContainer from "../components/StoryContainer";

const NameEntryScreen = ({ navigation }) => {
  const { username, setUsername } = useContext(NameContext);
  return (
    <Container color='dark'>
      <Image style={styles.img} source={require("../img/mother-nature.png")} />
      <StoryContainer>
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.textStyle}>What is your</Text>
            <Text style={styles.textStyle}>
              <Text style={{ ...styles.textStyle, color: "orange" }}>name</Text>
              ?
            </Text>
          </View>
          <Input
            maxLength={10}
            placeholder='NAME HERE'
            onChangeText={setUsername}
            value={username}
          />
          <MyButton
            width='200px'
            style={styles.btnGame}
            disabled={!username}
            title='BEGIN THE STORY'
            onPress={() => navigation.navigate("StoryScreen")}
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
