import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { TextInput } from "react-native-gesture-handler";
import { Container } from "../components/util/Container";

const NameEntryScreen = ({navigation}) => {
    const [name, onChangeName] = React.useState("");
    return (
        <Container>
            <Text style={styles.textStyle}>What is your name?</Text>
            <Image style={styles.img} source={require('../img/mother-nature.png')}/>
            <TextInput         
                placeholder='NAME HERE'
                onChangeText={onChangeName}
                value={name}
            />
            <Button style={styles.btnGame}
                title="BEGIN THE STORY"
                onPress={() => navigation.navigate('StoryScreen2')}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    textSub: {
        fontSize: 20
    },
    img:{
        position: 'absolute',
        top: 50,
        right: 10,
    }
});

export default NameEntryScreen;