import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import { Container } from "../../components/util/Container";
import { MyButton } from "../../components/util/MyButton";

const StoryScreen4 = ({ navigation }) => {
    return (
        <View>
            <Container>
                <Image source={require('../../img/mother-nature.png')} />
                <View>
                    <Text>
                        We need to update the electronic brains so they have the knowledge to make the right decisions.
                    </Text>
                    <MyButton
                        title='I am ready!'
                        color='#383B8F'
                        width='250px'
                        height='50px'
                        onPress={() => navigation.navigate("LevelScreen", {level: 1, progress: 0.3})}
                    />
                </View>
            </Container>
        </View>
    );
}
export default StoryScreen4;