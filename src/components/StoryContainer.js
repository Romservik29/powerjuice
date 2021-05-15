import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

export default function StoryContainer({children}) {
  return (
      <Container>
        <InnerConatiner>
            {children}
        </InnerConatiner>
      </Container>
  );
}

const Container = styled.View`
  width: 90%;
  height: 95%;
  background-color: #4d51c2;
  border-radius: 30px;
`;

const InnerConatiner = styled.View`
  border-radius: 30px;
  width: 100%;
  background-color: #ffffff;
  height: 97%;
  margin: auto;
`;
