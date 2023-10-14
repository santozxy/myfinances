import { useState } from "react";
import {
  Container,
  Title,
  Content,
  Symbol,
  TextBalance,
  TextExpenses,
  ToggleBalance,
  Skeleton,
} from "./styles";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export default function Balance({ balance, expenses }) {
  const [showBalance, setShowBalance] = useState(true);
  const { colors } = useTheme();
  return (
    <Container>
      <Content>
        <Title>Saldo atual</Title>
        {showBalance ? (
          <Symbol>
            R$ <TextBalance>{balance}</TextBalance>
          </Symbol>
        ) : (
          <Skeleton></Skeleton>
        )}
      </Content>
      <ToggleBalance onPress={() => setShowBalance(!showBalance)}>
        {showBalance ? (
          <MaterialCommunityIcons
            name="eye-off"
            size={30}
            color={colors.primary}
          />
        ) : (
          <AntDesign name="eye" size={30} color={colors.primary} />
        )}
      </ToggleBalance>
      <Content>
        <Title>Gastos</Title>
        {showBalance ? (
          <Symbol>
            R$ <TextExpenses>- {expenses}</TextExpenses>
          </Symbol>
        ) : (
          <Skeleton></Skeleton>
        )}
      </Content>
    </Container>
  );
}
