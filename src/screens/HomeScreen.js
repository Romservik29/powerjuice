import 'react-native-gesture-handler';
import React from "react";
import { View, Image } from "react-native";
import { Container } from "../components/util/Container";
import CreatedBy from "../components/util/CreatedBy";
import { Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Container>
        <Image source={require('../img/mother-nature.png')}/>
        <View>
          <Button
            title='Play Game'
            color='#F2A323'
            width='250px'
            onPress={() => navigation.navigate("NameEntryScreen")}
          />
          <Button
            title='Find e-waste Recyling'
            color='#383B8F'
            width='250px'
            onPress={() => navigation.navigate("Info")}
          />
        </View>
        <CreatedBy />
      </Container>
    </View>
  );
};

export default HomeScreen;