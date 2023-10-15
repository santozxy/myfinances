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

export default function Balance({ gains, expenses }) {
  const [showBalance, setShowBalance] = useState(true);
  const { colors } = useTheme();
  return (
    <Container>
      <Content>
        <Title>Ganhos</Title>
        {showBalance ? (
          <Symbol>
            <MaterialCommunityIcons
              name="arrow-up"
              color={colors.primary}
              size={16}
            />
            R$ <TextBalance>{gains} </TextBalance>
          </Symbol>
        ) : (
          <Skeleton></Skeleton>
        )}
      </Content>
      <Content>
        <Title>Gastos</Title>
        {showBalance ? (
          <Symbol>
            R${" "}
            <TextExpenses>
              - {expenses}{" "}
              <MaterialCommunityIcons
                name="arrow-down"
                color={colors.red}
                size={16}
              />
            </TextExpenses>
          </Symbol>
        ) : (
          <Skeleton></Skeleton>
        )}
      </Content>
    </Container>
  );
}
