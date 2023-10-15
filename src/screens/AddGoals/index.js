import {
  Container,
  GoBack,
  Header,
  Banner,
  Goal,
  GoalContainer,
  InputContainer,
  TitleContainer,
  FirstTitle,
  SecondTitle,
  Title,
  Button
} from "./styles";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Input } from "@rneui/themed";

export default function AddGoals({ navigation, route }) {
  const [goal, setGoal] = useState(100);
  const [reserve, setReserve] = useState(0);
  const { data } = route.params;
  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <GoBack onPress={() => navigation.navigate("SelectTypeGoal")}>
          <Feather name="arrow-left" size={36} color={colors.white} />
        </GoBack>
        <TitleContainer>
          <FirstTitle>Criar </FirstTitle>
          <SecondTitle>meta</SecondTitle>
        </TitleContainer>
      </Header>
      <Banner source={data.img} />
      <GoalContainer>
        <Goal>R$ {goal ? goal : 100}</Goal>
      </GoalContainer>
      <InputContainer>
        <Input
          keyboardType="number-pad"
          placeholder="Qual sua meta ?"
          errorStyle={{ color: "red" }}
          onChangeText={(value) => setGoal(parseInt(value))}
          placeholderTextColor={colors.gray}
          style={{ color: colors.white }}
        />
      </InputContainer>
      <Button>
        <Title>Criar meta</Title>
      </Button>
    </Container>
  );
}
