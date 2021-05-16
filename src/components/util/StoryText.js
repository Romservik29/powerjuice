import styled from 'styled-components'

export const StoryText = styled.Text`
    color: #383B8F;
    text-align: justify;
    width: 246px;
    font-size: ${props => props.fontSize ?? "15px"};
    line-height: 17px;
    font-weight: 600;
`