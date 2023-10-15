import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-color: ${(props) => props.theme.colors.quaternary};
`;
export const Content = styled.View``;

export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

export const Symbol = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const ContainerBalance = styled.View``;

export const TextGains = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const TextExpenses = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.red};
`;
