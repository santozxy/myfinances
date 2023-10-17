import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const BudgetContainer = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;


export const Title = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;

export const MessageContainer = styled.View`
  flex: 1;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ListContainer = styled.ScrollView`
  flex: 1;
`;

export const TransactionsList = styled.FlatList`
  flex: 1;
  margin-bottom: 10px;
`;
