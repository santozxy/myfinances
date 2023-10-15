import {
  Container,
  GoBack,
  Header,
  TitleContainer,
  FirstTitle,
  SecondTitle,
  ListContainer,
  CardList,
} from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import CardItem from "../../components/CardItem";

const data = [
  {
    id: 1,
    img: require("../../../assets/goals/education.jpg"),
    label: "Educação",
  },
  {
    id: 2,
    img: require("../../../assets/goals/travel.jpg"),
    label: "Viagem",
  },
  {
    id: 3,
    img: require("../../../assets/goals/professional.jpg"),
    label: "Carreira",
  },
  {
    id: 4,
    img: require("../../../assets/goals/reform.jpg"),
    label: "Reformas",
  },
  {
    id: 5,
    img: require("../../../assets/goals/accounts.jpg"),
    label: "Contas a pagar",
  },
  {
    id: 6,
    img: require("../../../assets/goals/shopping.jpg"),
    label: "Viagem",
  },
  {
    id: 7,
    img: require("../../../assets/goals/events.jpg"),
    label: "Festas e Eventos",
  },
  {
    id: 8,
    img: require("../../../assets/goals/emergency.jpg"),
    label: "Emergência",
  },
];

export default function SelectTypeGoal({ navigation }) {
  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <GoBack onPress={() => navigation.navigate("Goals")}>
          <Feather name="arrow-left" size={36} color={colors.white} />
        </GoBack>
        <TitleContainer>
          <FirstTitle>Qual o seu </FirstTitle>
          <SecondTitle>objetivo ?</SecondTitle>
        </TitleContainer>
      </Header>
      <ListContainer>
        <CardList
          numColumns={2}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardItem data={item} />}
        />
      </ListContainer>
    </Container>
  );
}
