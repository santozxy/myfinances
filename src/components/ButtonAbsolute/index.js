import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AddNewTransaction, TitleButton } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ButtonAdd({ route }) {
  const navigation = useNavigation();
  return (
    <AddNewTransaction onPress={() => navigation.navigate(route)}>
      <TitleButton>+</TitleButton>
    </AddNewTransaction>
  );
}

