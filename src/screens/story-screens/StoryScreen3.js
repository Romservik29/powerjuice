import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import StoryContainer from "../../components/StoryContainer";
import { Container } from "../../components/util/Container";
import { MyButton } from "../../components/util/MyButton";

const StoryScreen3 = ({ navigation }) => {
    return (
            <Container>
                <StoryContainer>
                <Image source={require('../../img/mother-nature.png')} />
                <View>
                    <Text>
                        We need to update the electronic brains so they have the knowledge to make the right decisions.
                    </Text>
                    <MyButton
                        title='Back'
                        color='#383B8F'
                        width='150px'
                        flexDirection='row'
                        onPress={() => navigation.navigate("NameEntry")}
                    />
                    <MyButton
                        title='Next'
                        color='#383B8F'
                        width='150px'
                        flexDirection='row'
                        onPress={() => navigation.navigate("StoryScreen4")}
                    />
                </View>
                </StoryContainer>
            </Container>
    );
};
export default StoryScreen3;