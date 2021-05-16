import styled from 'styled-components/native'

export const Container = styled.View`
display: flex;
align-items:center;
flex-direction: column;
justify-content: space-around;
background-color: ${ props=> props.color === 'dark' ? "#383B8F" : props.color ?? '#CFE2F3' };
height: 100%;
padding: 3%;
`