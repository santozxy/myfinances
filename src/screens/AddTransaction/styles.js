import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: ${props => props.theme.colors.secondary};
`

export const Header = styled.View`
    height: 110px;
    flex-direction: row;
    align-items: center;
    padding-top: 14px;
    padding-left: 14px;
    background-color: ${props => props.theme.colors.terciary};
    margin-bottom: 20px;
`

export const GoBack = styled.TouchableOpacity`
    height: 70px;
    align-items: center;
    flex-direction: row;
`

export const TitleContainer = styled.View`
    display:flex;
    flex-direction: row;
    padding-left: 18px;
`

export const FirstTitle = styled.Text`
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
`

export const SecondTitle = styled.Text`
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
`


