import { StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  TitleContainer,
  FirstTitle,
  SecondTitle,
  MenuButton,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

export default function Header({ title }) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <Container>
      <TitleContainer>
        <FirstTitle>My</FirstTitle>
        <SecondTitle>Finances</SecondTitle>
      </TitleContainer>
    </Container>
  );
}
