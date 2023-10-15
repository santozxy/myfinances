import styled from "styled-components/native";

export const Container = styled.View`
  height: 90px;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 14px;
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 20px;
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
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
`;
