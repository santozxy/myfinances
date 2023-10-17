import { useState } from "react";
import {
  Container,
  Row,
  TitleLabel,
  ContainerBalance,
  Content,
  Icon,
  Labels,
  Gains,
  ValueLabel,
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
        <ValueLabel>{balance},00</ValueLabel>
        <TitleLabel>Saldo atual</TitleLabel>
      </ContainerBalance>

      <Row>
        <Content>
          <Icon>
            <MaterialCommunityIcons
              name="arrow-up"
              color={colors.green}
              size={16}
            />
          </Icon>
          <Labels>
            <ValueLabel>R$ {gains} </ValueLabel>
            <TitleLabel>Ganhos</TitleLabel>
          </Labels>
        </Content>
        <Content>
          <Icon>
            <MaterialCommunityIcons
              name="arrow-down"
              color={colors.red}
              size={16}
            />
          </Icon>
          <Labels>
            <ValueLabel>R$ {expenses} </ValueLabel>
            <TitleLabel>Gastos</TitleLabel>
          </Labels>
        </Content>
      </Row>
    </Container>
  );
}
