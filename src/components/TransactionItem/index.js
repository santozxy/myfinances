import { useTheme } from "styled-components/native";
import {
  Container,
  Content,
  ContentRow,
  Label,
  Data,
  Balance,
  Expenses,
  Type,
  DeleteTransaction,
} from "./styles";
import Toast from "react-native-toast-message";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteTransaction } from "../../utils/storage";

export default function TransactionItem({ item, onDelete }) {
  const { colors } = useTheme();
  return (
    <Container>
      <Content>
        <Label>{item.label}</Label>
        <Data>{item.data}</Data>
      </Content>
      {item.type === "Deposito" ? (
        <ContentRow>
          <Content>
            <Balance>R$ {item.value}</Balance>
            <Type>{item.type}</Type>
          </Content>
          <DeleteTransaction>
            <MaterialCommunityIcons
              size={25}
              color={colors.red}
              name="delete"
            />
          </DeleteTransaction>
        </ContentRow>
      ) : (
        <ContentRow>
          <Content>
            <Expenses>R$ {item.value}</Expenses>
            <Type>{item.type}</Type>
          </Content>
          <DeleteTransaction onPress={() => onDelete(item.id)}>
            <MaterialCommunityIcons
              size={25}
              color={colors.red}
              name="delete"
            />
          </DeleteTransaction>
        </ContentRow>
      )}
    </Container>
  );
}
