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

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TransactionItem({ item, modalConfirm }) {
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
          <DeleteTransaction onPress={() => modalConfirm(item.id)}>
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
          <DeleteTransaction onPress={() => modalConfirm(item.id)}>
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
