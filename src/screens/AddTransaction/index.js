import { Container, GoBack, Header, TitleContainer, FirstTitle, SecondTitle } from './styles'
import { Feather } from '@expo/vector-icons'

export default function AddTransaction({ navigation }) {
    return (
        <Container>
            <Header>
                <GoBack onPress={() => navigation.goBack()}>
                    <Feather name='arrow-left' size={36} color={"#fff"} />
                </GoBack>
                <TitleContainer>
                    <FirstTitle>Nova </FirstTitle>
                    <SecondTitle>Transação</SecondTitle>
                </TitleContainer>
            </Header>
        </Container>
    )
}