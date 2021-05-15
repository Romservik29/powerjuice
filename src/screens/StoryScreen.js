import React from "react";
import { Text, StyleSheet, Image, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import StoryContainer from "../components/StoryContainer";
import { Container } from "../components/util/Container";
import {MyButton} from '../components/util/MyButton'

const StoryScreen = ({ navigation }) => {
  return (
    <Container color='#313494'>
      <Icon
        name='closecircleo'
        onPress={() => navigation.navigate("HomeScreen")}
        color='white'
        style={styles.text}
      />
      <StoryContainer>
        <InnerContainer>
          <Image source={require("../img/Rectangle.png")} styles={styles.img}></Image>
          <StoryText>
            Mother Earth needs your help <Text style={styles.name}>NAME HERE</Text>. Poison is
            leaking into her watery groundwater veins from electronics and the
            weight of the landfills are putting pressure on her.
          </StoryText>
          <MyButton title='NEXT'/>
        </InnerContainer>
      </StoryContainer>
    </Container>
  );
};

const StoryText = styled.Text`
width: 80%;
font-size: 16px;
padding-top: 15px;
`;

const InnerContainer = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  img:{
    marginBottom: '15px',
  },
  text: {
    fontSize: 30,
    position: "absolute",
    right: 5,
    top: 5,
  },
  name:{
    color: '#F2A323',
  },
  btnNext: {
    backgroundColor: "orange",
    color: "white",
  },
});

export default StoryScreen;
