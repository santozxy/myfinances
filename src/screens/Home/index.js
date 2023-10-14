import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import {
  Container,
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
import Toast from "react-native-toast-message";

export default function Home({ navigation }) {
  const { colors } = useTheme();
  const focused = useIsFocused();
  // Estado para indicar se os dados estão sendo carregados
  const [loading, setLoading] = useState(true);
  // Estado para armazenar os dados das transações
  const [data, setData] = useState([]);

  useEffect(() => {
    let isActive = true;
    // Função para buscar as transações salvas
    async function getTransactions() {
      const result = await getTransactionsSave("@transactions");
      if (isActive) {
        setData(result);
      }
    }
    if (isActive) {
      getTransactions();
      setLoading(false); // Marca o carregamento como completo
    }
    // Função de limpeza para evitar vazamentos de memória
    return () => {
      isActive = false;
      setLoading(true);
    };
  }, [focused]);

  // Função para excluir uma transação
  async function deleteItem(id) {
    await deleteTransaction(id);
    showToast();
    const result = await getTransactionsSave("@transactions");
    setData(result); // Atualiza a lista de transações após a exclusão
  }

  // Função para exibir um toast de sucesso
  function showToast() {
    Toast.show({
      type: "success",
      position: "top",
      text1: "Aviso",
      text2: "Deletado com sucesso",
      visibilitytime: 1000,
      autoHide: true,
    });
  }

  // Filtra as transações em despesas e ganhos
  const expenses = data.filter((item) => item.type === "Gastos");
  const gains = data.filter((item) => item.type === "Deposito");

  let totalExpenses = 0;
  // Calcula o total das despesas
  for (const item of expenses) {
    const value = parseInt(item.value);
    if (!isNaN(value)) {
      totalExpenses += value;
    }
  }

  let totalGains = 0;

  // Calcula o total dos ganhos
  for (const item of gains) {
    const value = parseInt(item.value);
    if (!isNaN(value)) {
      totalGains += value;
    }
  }

  // Calcula o saldo total
  let totalBalance = totalGains - totalExpenses;

  return (
    <Container>
      <Toast />
      <Header title="MyFinances" />
      <BalanceContainer>
        <Balance expenses={totalExpenses} balance={totalBalance} />
      </BalanceContainer>

      <HeaderTransactions>
        <Title>Transações</Title>

        {/* Navega para a tela de adicionar transação */}
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
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              // Renderiza um item de transação
              <TransactionItem item={item} onDelete={deleteItem} />
            )}
          />
        )}
      </ListContainer>
    </Container>
  );
}
