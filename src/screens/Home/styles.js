import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const BalanceContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0 10px 25px;
`;

export const HeaderTransactions = styled.View`
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
`;

export const TitleButton = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;


export const MessageContainer = styled.View`
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  align-self: center;
`;

export const AddNewTransaction = styled.TouchableOpacity`
  width: 110px;
  background-color: ${(props) => props.theme.colors.primary};
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ListContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  flex: 1;
`;

export const TransactionsList = styled.FlatList`
  flex: 1;
  margin-bottom: 10px;
`;
