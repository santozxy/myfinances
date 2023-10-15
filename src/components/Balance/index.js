import { useState } from "react";
import {
  Container,
  Row,
  Title,
  ContainerBalance,
  Content,
  Symbol,
  TextGains,
  TextExpenses,
} from "./styles";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export default function Balance({ gains, expenses }) {
  const [showBalance, setShowBalance] = useState(true);
  const { colors } = useTheme();
  let balance = gains - expenses;
  return (
    <Container>
      <ContainerBalance>
        <Title>Saldo</Title>
        <Title>{balance}</Title>
      </ContainerBalance>
      <Row>
        <Content>
          <Title>Ganhos</Title>
          <Symbol>
            <MaterialCommunityIcons
              name="arrow-up"
              color={colors.primary}
              size={16}
            />
            R$ <TextGains>{gains} </TextGains>
          </Symbol>
        </Content>
        <Content>
          <Title>Gastos</Title>
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
        </Content>
      </Row>
    </Container>
  );
}
