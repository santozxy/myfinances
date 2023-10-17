import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.View`
  height: 90px;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 14px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const GoBack = styled.TouchableOpacity`
  height: 70px;
  align-items: center;
  flex-direction: row;
`;

export const Animation = styled.View``;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: 18px;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
`;

export const Form = styled.View`
  flex: 1;
`;

export const InputContainer = styled.View`
  margin: 12px 10px;
`;

export const Input = styled.TextInput`
  background-color: ${(props) => props.theme.colors.white};
  color: #fff;
  padding: 8px;
  width: 100%;
  height: 35px;
  border-radius: 8px;
  margin-top: 3px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 35px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 15px;
`;

export const TitleButton = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;
