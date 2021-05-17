import React, { useContext } from "react";
import { Alert, Image, View } from "react-native";
import { LanguageContext, PointsContext } from "../../App";
import language from "../../language";
import Close from "../components/util/Close";
import { Container } from "../components/util/Container";
import { MyButton } from "../components/util/MyButton";
import { StoryText } from "../components/util/StoryText";


export default function FinalMeanScreen({navigation}) {
  const { points } = useContext(PointsContext);
  const {lang} = useContext(LanguageContext);
  const Buttons = () => (
    <View>
      
      <MyButton
        title={language.Play_again[lang]}
        color='#F2A323'
        width='250px'
        onPress={()=> navigation.navigate("HomeScreen")}
      />
      <MyButton
        title='find e-waste recycling'
        color='#383B8F'
        width='250px'
        onPress={() => Alert.alert("It's not ready!")}
      />
    </View>
  );

  return (
    <Container color='white'>
      <Close color="#383B8F" navigation={navigation} />
      {points < 80 ? (
        <View>
          <Image source={require("../img/mother-nature-sad.png")} />
          <StoryText>
            {language.Bad_mean[lang]}
          </StoryText>
          <Buttons/>
        </View>
      ) : points < 125 ? (
        <View>
          <Image source={require("../img/mother-nature-good.png")} />
          <StoryText>
            {language.Normal_mean[lang]}
          </StoryText>
          <Buttons/>
        </View>
      ) : (
        <View style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
          <Image source={require("../img/mother-nature-great.png")} />
          <StoryText>
            {language.Great_mean[lang]}
          </StoryText>
          <Buttons/>
        </View>
      )}
    </Container>
  );
}
