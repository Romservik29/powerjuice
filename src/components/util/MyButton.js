import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';


const Label = styled.Text`
  color: ${props => props.color ?? 'white'};
  font-weight: 700;
  align-self: center;
  padding: 10px;
`

const ButtonContainer = styled.TouchableHighlight`
  background-color: ${props => props.color};
  width: 80%;
  margin-top: 5px;
  border-radius: 5px;
  width: ${props => props.width};
`

export const MyButton = (props) => {
    return (
        <ButtonContainer
            onPress={props.onPress}
            color={props.color ?? 'orange'}
            width={props.width ?? '100%'}
            height={props.height ?? "minContent"}
            disabled ={props.disabled ?? false}
        >
            <Label>
                {props.children ?? props.title}
            </Label>
        </ButtonContainer>)
}
