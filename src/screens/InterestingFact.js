import React from 'react'
import { Image } from 'react-native'
import { Button } from 'react-native-elements/'
import StoryContainer from '../components/StoryContainer'
import { Container } from '../components/util/Container'
import { StoryText } from '../components/util/StoryText'

export default function InterestingFact({ navigation }) {
    return (
        <Container color="dark">
            <StoryContainer>
                <Image source={require('../img/Ellipse.png')} style={{ width: 150, height: 150 }} />
                <StoryText style={{ padding: 30, height: 130 }}>
                    That is the weight of 5 300 Eiffel Towers!\n
                    By 2030, the amount of e-waste will reach 74 million tons. It's about 7 325 Eiffel Towers.
            </StoryText>
                <Button title="CONTINUE" onPress={() => navigation.navigate("HomeScreen")} />
            </StoryContainer>

        </Container>
    )
}
