import {
  Container,
  GoBack,
  Header,
  TitleContainer,
  FirstTitle,
  SecondTitle,
  Form,
  InputContainer,
  Input,
  Button,
  Title,
} from "./styles";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Toast from "react-native-toast-message";

import {
  clearAllData,
  getTransactionsSave,
  createTransaction,
} from "../../utils/storage";
import { createNewID } from "../../utils/utils";

// Definição do esquema de validação usando Yup
const validationSchema = yup.object({
  label: yup.string().required("Ops, preencha este campo"),
  value: yup.string().required("Ops, preencha este campo"),
  data: yup.string().required("Ops, preencha este campo"),
  type: yup.string().required("Ops, preencha este campo"),
});

export default function AddTransaction({ navigation }) {
  const { colors } = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Função para criar uma nova transação
  async function handleCreate(data) {
    const result = await getTransactionsSave("@transactions");
    const newId = createNewID(result);
    // Cópia de data para evitar alterar o objeto original
    const newData = { ...data };
    newData.id = newId;
    //clearAllData()
    // Criar uma nova transação
    console.log(newData);
    await createTransaction("@transactions", newData);
  }

  return (
    <Container>
      <Header>
        <GoBack onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={36} color={colors.white} />
        </GoBack>
        <TitleContainer>
          <FirstTitle>Nova </FirstTitle>
          <SecondTitle>Transação</SecondTitle>
        </TitleContainer>
      </Header>

      <Form>
        <InputContainer>
          <Title>
            Título da transação{" "}
            {errors.label && (
              <MaterialCommunityIcons
                size={18}
                name="alert-box"
                color={colors.red}
              />
            )}
          </Title>
          <Controller
            control={control}
            name="label"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={{
                  borderWidth: errors.label && 1,
                  borderColor: errors.label && colors.red,
                }}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Digite o nome da transação"
                placeholderTextColor={colors.black}
              />
            )}
          />
        </InputContainer>

        <InputContainer>
          <Title>
            Valor da transação{" "}
            {errors.value && (
              <MaterialCommunityIcons
                size={18}
                name="alert-box"
                color={colors.red}
              />
            )}
          </Title>
          <Controller
            control={control}
            name="value"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={{
                  borderWidth: errors.value && 1,
                  borderColor: colors.red,
                }}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Digite o valor da transação"
                placeholderTextColor={colors.black}
              />
            )}
          />
        </InputContainer>

        <InputContainer>
          <Title>
            Data da transação{" "}
            {errors.data && (
              <MaterialCommunityIcons
                size={18}
                name="alert-box"
                color={colors.red}
              />
            )}
          </Title>
          <Controller
            control={control}
            name="data"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={{
                  borderWidth: errors.data && 1,
                  borderColor: colors.red,
                }}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Digite a data da transação"
                placeholderTextColor={colors.black}
              />
            )}
          />
        </InputContainer>

        <InputContainer>
          <Title>
            Tipo da transação{" "}
            {errors.type && (
              <MaterialCommunityIcons
                size={18}
                name="alert-box"
                color={colors.red}
              />
            )}
          </Title>
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={{
                  borderWidth: errors.type && 1,
                  borderColor: colors.red,
                }}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Digite a tipo da transação"
                placeholderTextColor={colors.black}
              />
            )}
          />
        </InputContainer>

        <Button onPress={handleSubmit(handleCreate)}>
          <Title>Adicionar transação</Title>
        </Button>
      </Form>
    </Container>
  );
}
