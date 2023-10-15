import styled from "styled-components/native";

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 14px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const MenuButton = styled.TouchableOpacity`
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
