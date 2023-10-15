import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  border-radius: 8px;
  padding: 10px;
  border-bottom-width: 3px;
  border-color: ${(props) => props.theme.colors.black};
`;

export const Content = styled.View`
  gap: 8px;
`;
export const ContentRow = styled.View`
  flex-direction: row;
  gap: 16px;
`;
export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

export const Data = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Balance = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const Expenses = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.red};
`;

export const Type = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
  text-align: right;
`;

export const DeleteTransaction = styled.TouchableOpacity`
  padding: 8px;
  border-left-width: 1px;
  border-color: #fff2;
  align-items: center;
  justify-content: center;
`;
