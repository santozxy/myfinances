export function createNewID(result) {
  let maxId = 0;
  result.forEach((item) => {
    if (item.id > maxId) {
      maxId = item.id;
    }
  });
  // Novo ID como o maior ID encontrado mais 1
  return maxId + 1;
}

export function expensesCalculator(data) {
  //Filtra todas as transações do type: Gastos
  const expensesData = data.filter((item) => item.type === "Gastos");
  let totalExpenses = 0;
  // Faz a somatoria de todas as transações do type: Gastos
  for (const item of expensesData) {
    const value = parseInt(item.value);
    if (!isNaN(value)) {
      totalExpenses += value;
    }
  }
  return totalExpenses;
}

export function gainsCalculator(data) {
  //Filtra todas as transações do type: Depósito
  const gainsData = data.filter((item) => item.type === "Deposito");
  let totalGains = 0;
  // Faz a somatoria de todas as transações do type: Depósito
  for (const item of gainsData) {
    const value = parseInt(item.value);
    if (!isNaN(value)) {
      totalGains += value;
    }
  }
  return totalGains;
}
