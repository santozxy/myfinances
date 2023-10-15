import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.terciary};
  border-radius: 10px;
  border-bottom-width: 4px;
  border-color: ${(props) => props.theme.colors.black};
`;
export const Content = styled.View`
  margin: 0 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

export const Symbol = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;

export const ToggleBalance = styled.TouchableOpacity``;

export const Skeleton = styled.View`
  height: 12px;
  width: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const TextBalance = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const TextExpenses = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.red};
`;
