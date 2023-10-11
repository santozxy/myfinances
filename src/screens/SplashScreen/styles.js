import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    display: flex;
    flex-direction: column;
    flex:1;
    gap: 30px;
    height: 100%;
    background-color: ${props => props.theme.colors.secondary};
    justify-content: center;
    align-items: center;
`

export const TitleContainer = styled.View`
    display:flex;
    flex-direction: row;
`

export const FirstTitle = styled.Text`
    font-size: 32px;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
`

export const SecondTitle = styled.Text`
    font-size: 32px;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
`

export const Input = styled.TextInput`
  width: 70%;
  height: 42px;
  background-color: ${props => props.theme.colors.white};
  padding: 0px 6px;
  border-radius: 10px;
  color: #111;
  font-weight: bold;
  font-size: 16px;
`

export const Button = styled.TouchableOpacity`
    width: 70%;
    height: 42px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text`
    text-align: center;
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
`