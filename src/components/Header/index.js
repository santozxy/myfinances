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

export default function Header({ title }) {
  const navigation = useNavigation();
  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={36} color={"#fff"} />
      </MenuButton>
      <TitleContainer>
        <FirstTitle>My</FirstTitle>
        <SecondTitle>Finances</SecondTitle>
      </TitleContainer>
    </Container>
  );
}
