import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import Toast from "react-native-toast-message";
import {
  Container,
  Content,
  BalanceContainer,
  HeaderTransactions,
  Title,
  AddNewTransaction,
  ListContainer,
  MessageContainer,
  Message,
  TransactionsList,
} from "./styles";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import TransactionItem from "../../components/TransactionItem";
import { getTransactionsSave, deleteTransaction } from "../../utils/storage";

import { expensesCalculator, gainsCalculator } from "../../utils/utils";
import ModalDelete from "../../components/ModalDelete";

export default function Home({ navigation }) {
  const { colors } = useTheme();
  const focused = useIsFocused();
  // Estado para indicar se os dados estão sendo carregados
  const [loading, setLoading] = useState(true);
  // Estado para armazenar os dados das transações
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    let isActive = true;
    // Função para buscar as transações salvas
    async function getTransactions() {
      const result = await getTransactionsSave("@transactions");
      if (isActive) {
        setData(result);
        setLoading(false);
      }
    }
    if (isActive) {
      getTransactions();
    }
    // Função de limpeza para evitar vazamentos de memória
    return () => {
      isActive = false;
      setLoading(true);
    };
  }, [focused]);

  // Função para excluir uma transação
  async function deleteItem(id) {
    const transactions = await deleteTransaction(id);
    Toast.show({
      type: "success",
      position: "top",
      text1: "Notificação",
      text2: "Transação criada com sucesso",
      visibilityTime: 1000,
      autoHide: true,
    });
    setData(transactions); // Atualiza a lista de transações após a exclusão
    setShowModal(false);
  }

  function showModalConfirmation(id) {
    //Função de mostrar o modal
    setShowModal(true);
    setId(id);
  }

  // Filtra as transações em despesas e ganhos
  let totalGains = gainsCalculator(data);
  let totalExpenses = expensesCalculator(data);
  let totalBalance = totalGains - totalExpenses;

  if (loading) {
    return (
      <Container>
        <MessageContainer>
          <ActivityIndicator size="large" color={colors.primary} />
          <Message>Carregando...</Message>
        </MessageContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <ModalDelete
        visible={showModal}
        cancel={setShowModal}
        id={id}
        onDelete={deleteItem}
      />
      <BalanceContainer>
        <Balance expenses={totalExpenses} gains={totalGains} />
      </BalanceContainer>
      <Content>
        <HeaderTransactions>
          <Title>Transações</Title>
          <AddNewTransaction
            onPress={() => navigation.navigate("AddTransaction")}
          >
            <Title>Adicionar</Title>
          </AddNewTransaction>
        </HeaderTransactions>

        <ListContainer>
          {/* Verifica se não há transações a serem exibidas */}
          {data.length === 0 ? (
            <MessageContainer>
              <Message>Você não possui nenhuma transação</Message>
            </MessageContainer>
          ) : (
            <TransactionsList
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                // Renderiza um item de transação
                <TransactionItem
                  item={item}
                  modalConfirm={showModalConfirmation}
                />
              )}
            />
          )}
        </ListContainer>
      </Content>
    </Container>
  );
}
