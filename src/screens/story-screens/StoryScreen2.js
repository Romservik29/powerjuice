import React from "react";
import { Text, View, Image } from "react-native";
import StoryContainer from "../../components/StoryContainer";
import { Container } from "../../components/util/Container";
import { MyButton } from "../../components/util/MyButton";
import { StoryText } from "../../components/util/StoryText";

const StoryScreen2 = ({ navigation }) => {
  return (
    <Container color='dark'>
      <StoryContainer>
        <Image source={require("../../img/mother-nature.png")} />
        <StoryText style={{ margin: 20 }}>
          The robots who live on Mother Earth need to be educated and new
          information needs to be uploaded to their electronic brains so they
          can change their ways and we can save Mother Earth.
        </StoryText>
        <View style={{ flexDirection: "row", width: 250, justifyContent: 'space-around' }}>
          <MyButton
            title='Back'
            color='#383B8F'
            width='100px'
            onPress={() => navigation.navigate("StoryScreen")}
          />
          <MyButton
            title='Next'
            width='100px'
            onPress={() => navigation.navigate("StoryScreen3")}
          />
        </View>
      </StoryContainer>
    </Container>
  );
};
export default StoryScreen2;
