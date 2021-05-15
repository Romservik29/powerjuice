import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const colors = {
    accent: '#911',
    highlight: '#D22',
    contrast: '#FFF',
}

const Label = styled.Text`
  color: ${props => !props.outline ? colors.contrast : colors.accent};
  font-weight: 700;
  align-self: center;
  padding: 10px;
`

const ButtonContainer = styled.TouchableHighlight`
  background-color: ${props => props.color};
  width: 80%;
  margin-top: 5px;
  border-radius: 5px;
  width: ${props => props.width}
`

export const MyButton = (props) => {
    return (
        <ButtonContainer
            onPress={props.onPress}
            color={props.color ?? 'orange'}
            width={props.width ?? '100%'}
        >
            <Label>
                {props.children ?? props.title}
            </Label>
        </ButtonContainer>)
}