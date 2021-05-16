import React from 'react';
import styled from 'styled-components/native';

const Label = styled.Text`
  color: white;
  font-weight: 700;
  align-self: center;
  padding: 10px;
`

const ButtonContainer = styled.TouchableHighlight`
  background-color: orange;
  width: 80%;
  margin-top: 5px;
  border-top-left-radius: 15px;
  height: 60px;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  position: absolute;
  bottom: 0px;
  right: 0px;
`

export const NextButton = (props) => {
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