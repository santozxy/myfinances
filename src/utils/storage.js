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

export async function getGoalsSave(key) {
  // Obter Caixinha
  const myGoals = await AsyncStorage.getItem(key);
  let goalsSave = JSON.parse(myGoals) || [];
  return goalsSave;
}

export async function createGoal(key, goals) {
  // Adicionar Caixinha
  let goalsStorage = await getGoalsSave(key);

  goalsStorage.push(goals);

  await AsyncStorage.setItem(key, JSON.stringify(goalsStorage));
  console.log("A caixinha foi salva com sucesso");
}

export async function deleteGoal(id) {
  // Deletar Caixinha
  let goalsStorage = await getGoalsSave("@goals");

  let myGoals = goalsStorage.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@goals", JSON.stringify(myGoals));
  console.log("A caixinha foi deletada com sucesso");
  return myGoals;
}
