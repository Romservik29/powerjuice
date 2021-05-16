import React, { useContext } from "react";
import { Text, StyleSheet, Image, Button, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import { NameContext } from "../../../App";
import StoryContainer from "../../components/StoryContainer";
import { Container } from "../../components/util/Container";
import { NextButton } from "../../components/util/NextButton";

const StoryScreen = ({ navigation }) => {
  const { username } = useContext(NameContext);
  return (
    <Container color='#313494'>
      <Icon
        name='closecircleo'
        onPress={() => navigation.navigate("HomeScreen")}
        color='white'
        style={styles.close}
      />
      <StoryContainer>
          <Image
            source={require("../../img/Rectangle.png")}
            style={styles.img}></Image>
          <Text style={styles.text}>
            Mother Earth needs your help
            <Text style={{fontSize: 16, color: "#F2A323", fontWeight: 'bold'}}>{" " + username}</Text>. Poison is leaking
            into her watery groundwater veins from electronics and the weight of
            the landfills are putting pressure on her.
          </Text>
      </StoryContainer>
      <NextButton
        title='NEXT'
        color='#383B8F'
        width='150px'
        flexDirection='row'
        onPress={() => navigation.navigate("StoryScreen2")}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    marginBottom: 20,
    width: 246,
    height: 246,
  },
  close: {
    fontSize: 30,
    position: "absolute",
    right: 5,
    top: 5,
  },
  text: {
    color: "#383B8F",
    textAlign: "justify",
    width: 246,
    fontSize: 15,
    lineHeight: 17,
    fontWeight: "600",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "green",
    color: "white",
    width: 200,
  },
});

export default StoryScreen;
