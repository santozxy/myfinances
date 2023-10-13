
import { Container, Content, Label, Data, Balance, Expenses, Type } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function TransactionItem({ item }) {
  return (
    <Container>
      <Content>
        <Label>{item.label}</Label>
        <Data>{item.data}</Data>
      </Content>
      {item.type === 'Deposito' ?
        <Content>
          <Balance>R$ {item.value}</Balance>
          <Type>{item.type}</Type>
        </Content>
        :
        <Content>
          <Expenses>R$ {item.value}</Expenses>
          <Type>{item.type}</Type>
        </Content>
      }
    </Container>
  )
}