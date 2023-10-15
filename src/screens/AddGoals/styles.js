import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Header = styled.View`
  height: 90px;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 14px;
  background-color: ${(props) => props.theme.colors.terciary};
 
`;

export const GoBack = styled.TouchableOpacity`
  height: 70px;
  align-items: center;
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: 18px;
`;

export const FirstTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;

export const SecondTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;  
`;


export const Goal = styled.Text`
  font-size: 28px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  padding-left: 15px;
  padding-top: 10px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
`;

export const GoalContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: row;
  margin-top: 40px;
`;

export const InputContainer = styled.View`

`

export const Button = styled.TouchableOpacity`
  width: 90%;
  background-color: ${(props) => props.theme.colors.primary};
  height: 35px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
