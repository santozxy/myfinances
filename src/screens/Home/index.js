import {
  Container,
  BalanceContainer,
  HeaderTransactions,
  Title, AddNewTransaction,
  ListContainer, TransactionsList
} from './styles'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import TransactionItem from '../../components/TransactionItem'

export default function Home({ navigation }) {

  const data = [
    {
      id: '0',
      label: 'Reformas',
      value: 2500,
      data: '29/10/2023',
      type: "Deposito"
    },
    {
      id: '1',
      label: 'Computador',
      value: 2500,
      data: '29/10/2023',
      type: "Deposito"
    },
    {
      id: '2',
      label: 'Reformas',
      value: 2500,
      data: '29/10/2023',
      type: "Gastos"
    },
    {
      id: '3',
      label: 'Reformas',
      value: 2500,
      data: '29/10/2023',
      type: "Deposito"
    },
    {
      id: '4',
      label: 'Reformas',
      value: 2500,
      data: '29/10/2023',
      type: "Gastos"
    },
    {
      id: '5',
      label: 'Reformas',
      value: 2500,
      data: '29/10/2023',
      type: "Deposito"
    },
    {
      id: '6',
      label: 'Reformas',
      value: 2500,
      data: '29/10/2023',
      type: "Deposito"
    },
    {
      id: '7',
      label: 'Reformas',
      value: 2500,
      data: '29/10/2023',
      type: "Gastos"
    },
  ]

  const expenses = data.filter(item => item.type === 'Gastos')
  const gains = data.filter(item => item.type === 'Deposito')
  let totalExpenses = 0;
  for (const item of expenses) {
    if (item.value) {
      totalExpenses += item.value;
    }
  }

  let totalGains = 0;
  for (const item of gains) {
    if (item.value) {
      totalGains += item.value;
    }
  }

  let totalBalance = totalGains - totalExpenses


  return (
    <Container>
      <Header title='MyFinances' />
      <BalanceContainer>
        <Balance expenses={totalExpenses} balance={totalBalance} />
      </BalanceContainer>

      <HeaderTransactions>
        <Title>Transações</Title>
        <AddNewTransaction onPress={() => navigation.navigate('AddTransaction')}><Title>Adicionar</Title></AddNewTransaction>
      </HeaderTransactions>
      <ListContainer>
        <TransactionsList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionItem item={item} />}
        />
      </ListContainer>

    </Container>
  )
}