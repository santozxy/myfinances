import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;
export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-width: 1px;
  padding: 10px;
  border-color: ${(props) => props.theme.colors.gray};
  border-radius: 10px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Icon = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
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

export const ValueBalance = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

export const TitleBalance = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
`;

export const ContainerBalance = styled.View`
  margin: 20px 0;
`;
