import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native"
import { Container } from "../../components/util/Container"
import { MyButton } from "../../components/util/MyButton"

const StoryScreen2 = ({ navigation }) => {
    return (
        <View>
            <Container>
                <Image source={require('../../img/mother-nature.png')} />
                <View>
                    <Text>
                        The robots who live on Mother Earth need to be educated and new information needs
                        to be uploaded to their electronic brains so they can change their ways and we
                        can save Mother Earth.
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
                        onPress={() => navigation.navigate("StoryScreen3")}
                    />
                </View>
            </Container>
        </View>
    );
};
export default StoryScreen2;