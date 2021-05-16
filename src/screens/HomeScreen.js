import "react-native-gesture-handler";
import React, { useContext } from "react";
import { View, Image, Alert } from "react-native";
import { Container } from "../components/util/Container";
import CreatedBy from "../components/util/CreatedBy";
import { MyButton } from "../components/util/MyButton";
import { LanguageContext, PointsContext } from "../../App";
import language from "../../language";

const HomeScreen = ({ navigation }) => {
  const { setPoints } = useContext(PointsContext);
  const { lang } = useContext(LanguageContext);
  const handleClick = () => {
    setPoints(0);
    navigation.navigate("NameEntryScreen");
  };
  return (
    <View>
      <Container>
        <Image source={require("../img/mother-nature.png")} />
        <View>
          <MyButton
            title={language.Play_a_game_story[lang]}
            color='#F2A323'
            width='250px'
            onPress={handleClick}
          />
          <MyButton
            title='find e-waste recycling'
            color='#383B8F'
            width='250px'
            onPress={() => Alert.alert("It's not ready!")}
          />
        </View>
        <CreatedBy />
      </Container>
    </View>
  );
};

export default HomeScreen;
