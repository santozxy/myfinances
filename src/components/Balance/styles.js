import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Icon = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Labels = styled.View`
  display: flex;
  justify-content: space-around;
`;

export const ValueLabel = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

export const TitleLabel = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
`;

export const ContainerBalance = styled.View`
  margin: 30px 0;
`;
