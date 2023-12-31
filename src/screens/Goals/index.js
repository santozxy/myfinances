import { ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import {
  Container,
  BudgetContainer,
  Content,
  Title,
  Message,
  MessageContainer,
  Button,
  ListContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Goals() {
  const navigation = useNavigation();
  const data = [];
  return (
    <Container>
      <BudgetContainer></BudgetContainer>
      <Content>
        {data.length === 0 ? (
          <MessageContainer>
            <Message>Você não possui nenhuma meta</Message>
            <LottieView
              source={require("../../../assets/notGoalsAnimation.json")}
              autoPlay
              loop={false}
              style={{ height: 100 }}
            />
            <Button onPress={() => navigation.navigate("SelectTypeGoal")}>
              <Title>Adicionar meta</Title>
            </Button>
          </MessageContainer>
        ) : (
          <ListContainer>
            <TransactionsList showsVerticalScrollIndicator={false} />
          </ListContainer>
        )}
      </Content>
    </Container>
  );
}
