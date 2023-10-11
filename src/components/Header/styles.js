import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 5px 5px 5px #000;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
`
