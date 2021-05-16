import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

export default function StoryContainer({ children, color }) {
  return (
    <Container color={color}>
      <OuterConatiner>
        <InnerContainer>{children}</InnerContainer>
      </OuterConatiner>
    </Container>
  );
}
const InnerContainer = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  width: 90%;
  height: 90%;
  background-color: ${props => props.color ?? "#4d51c2"};
  border-radius: 30px;
`;

const OuterConatiner = styled.View`
  border-radius: 30px;
  width: 100%;
  background-color: #ffffff;
  height: 97%;
  margin: auto;
`;
