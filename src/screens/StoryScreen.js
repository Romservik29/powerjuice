import React from "react";
import { Text, StyleSheet, Image, Button, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import StoryContainer from "../components/StoryContainer";
import StoryContainer2 from "../components/StoryContainer2";
import { Container } from "../components/util/Container";
import { MyButton } from "../components/util/MyButton";

const StoryScreen = ({ navigation }) => {
  return (
    <Container color='#313494'>
      <Icon
        name='closecircleo'
        onPress={() => navigation.navigate("HomeScreen")}
        color='white'
        style={styles.close}
      />
      <StoryContainer>
        <InnerContainer>
          <Image source={require("../img/Rectangle.png")} style={styles.img}></Image>
          <Text style={styles.text}>
            Mother Earth needs your help{" "}
            <Text style={styles.name}>NAME HERE</Text>. Poison is leaking into
            her watery groundwater veins from electronics and the weight of the
            landfills are putting pressure on her.
          </Text>
          <MyButton title='NEXT' color='#383B8F' width='200px' />
        </InnerContainer>
      </StoryContainer>
    </Container>
  );
};

const InnerContainer = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  img:{
    marginBottom: 30,
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
    width: "80%",
    marginBottom: 10,
  },
  name: {
    color: "#F2A323",
  },
  btn: {
    backgroundColor: "green",
    color: "white",
    width: 200,
  },
});

export default StoryScreen;
