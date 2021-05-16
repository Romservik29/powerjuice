import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import StoryContainer from "../../components/StoryContainer";
import { Container } from "../../components/util/Container";
import { MyButton } from "../../components/util/MyButton";
import { StoryText } from "../../components/util/StoryText";

const StoryScreen4 = ({ navigation }) => {
  return (
    <View>
      <Container color='dark'>
        <StoryContainer>
          <Image source={require("../../img/mother-nature.png")} />
            <StoryText style={{margin: 20}}>
              We need to update the electronic brains so they have the knowledge
              to make the right decisions.
            </StoryText>
            <MyButton
              title='I am ready!'
              color='#383B8F'
              width='250px'
              height='50px'
              onPress={() =>
                navigation.navigate("LevelScreen", { level: 1, progress: 0.3 })
              }
            />
        </StoryContainer>
      </Container>
    </View>
  );
};
export default StoryScreen4;
