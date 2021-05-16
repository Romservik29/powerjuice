import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import StoryContainer from "../../components/StoryContainer";
import { Container } from "../../components/util/Container";
import { MyButton } from "../../components/util/MyButton";
import { StoryText } from "../../components/util/StoryText";

const StoryScreen3 = ({ navigation }) => {
  return (
    <Container>
      <StoryContainer color="dark">
        <Image source={require("../../img/mother-nature.png")} />
          <StoryText style={{ margin: 20 }}>
            We need to update the electronic brains so they have the knowledge
            to make the right decisions.
          </StoryText>
          <View
            style={{
              flexDirection: "row",
              width: 250,
              justifyContent: "space-around",
            }}>
            <MyButton
              title='Back'
              color='#383B8F'
              width='100px'
              flexDirection='row'
              onPress={() => navigation.navigate("NameEntry")}
            />
            <MyButton
              title='Next'
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
