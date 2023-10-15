import { View, Text } from "react-native";
import React from "react";
import { Container, Title, Image } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function CardItem({ data }) {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("AddGoals", { data: data })}>
      <Image source={data.img} />
      <Title>{data.label}</Title>
    </Container>
  );
}
