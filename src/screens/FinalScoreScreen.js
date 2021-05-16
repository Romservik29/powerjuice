import React, { useContext } from 'react'
import { Button, Image, Text } from 'react-native'
import { PointsContext } from '../../App'
import StoryContainer from '../components/StoryContainer'
import { Container } from '../components/util/Container'
import { MyButton } from '../components/util/MyButton'
import { StoryText } from '../components/util/StoryText'

export default function FinalScoreScreen({navigation}) {
    const {points} = useContext(PointsContext)
    return (
        <Container color="orange">
            <StoryContainer color="#FBCD84">
            <Image source={require('../img/mother-nature.png')} style={{ width: 150, height: 150 }} />
                <StoryText fontSize="20px" style={{ padding: 30, width: 300}}>
                Your score <Text style={{color: "orange" , fontWeight: 'bold'}}>{points}</Text> means that the robots are now at <Text style={{color: "orange" , fontWeight: 'bold'}}>{points < 80 ? "bad" : points < 125 ? "normal" : "very good"}</Text> knowledge level
            </StoryText>
                <MyButton width="150px" title="Go to home" onPress={() => navigation.navigate("HomeScreen")} />
            </StoryContainer>
        </Container>
    )
}
