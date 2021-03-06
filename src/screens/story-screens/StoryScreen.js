import React, { useContext } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { LanguageContext, NameContext } from "../../../App";
import language from "../../../language";
import StoryContainer from "../../components/StoryContainer";
import Close from "../../components/util/Close";
import { Container } from "../../components/util/Container";
import { NextButton } from "../../components/util/NextButton";

const StoryScreen = ({ navigation }) => {
  const { username } = useContext(NameContext);
  const {lang} = useContext(LanguageContext);
  return (
    <Container color='#313494'>
      <Close />
      <StoryContainer>
        <Image
          source={require("../../img/mother-nature-dies.png")}
          style={styles.img}></Image>
        <Text style={styles.text}>
          {lang === "fr" ? "Mère nature a besoin de votre aide": "Mother Earth needs your help"}
          <Text style={{ fontSize: 16, color: "#F2A323", fontWeight: "bold" }}>
            {" " + username+". "}
          </Text>
          {lang ==="fr" 
          ?"Le poison des déchets électroniques s'infiltre dans ses veines d'eau souterraines et les décharges lui mettent la pression." 
          :"Poison is leaking into her watery groundwater veins from electronics and the weight of the landfills are putting pressure on her." }
        </Text>
      </StoryContainer>
      <NextButton
        title={language.Next[lang]}
        color='#383B8F'
        width='150px'
        flexDirection='row'
        onPress={() => navigation.push("StoryScreen2")}
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
    color: "#383B8F",
  },
  btn: {
    backgroundColor: "green",
    color: "white",
    width: 200,
  },
});

export default StoryScreen;
