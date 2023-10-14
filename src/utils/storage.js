import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getTransactionsSave(key) {
  // Obter transações
  const myTransactions = await AsyncStorage.getItem(key);
  let transactionsSave = JSON.parse(myTransactions) || [];
  return transactionsSave;
}

export async function createTransaction(key, transaction) {
  // Adicionar transação
  let transactionsStorage = await getTransactionsSave(key);

  transactionsStorage.push(transaction);

  await AsyncStorage.setItem(key, JSON.stringify(transactionsStorage));
  console.log("A transação foi salva com sucesso");
}

export async function deleteTransaction(id) {
  // Deletar transação
  let transactionsStorage = await getTransactionsSave("@transactions");
  let myTransactions = transactionsStorage.filter((item) => {
    return item.id !== id;
  });
  await AsyncStorage.setItem("@transactions", JSON.stringify(myTransactions));
  console.log("A transação foi deletada com sucesso");
  return myTransactions;
}

export async function clearAllData() {
  try {
    await AsyncStorage.clear();
    console.log("Todos os dados do AsyncStorage foram apagados com sucesso.");
  } catch (error) {
    console.error("Erro ao apagar dados do AsyncStorage:", error);
  }
}
