import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const ModalContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #0006;
`;

export const ModalContent = styled.View`
  width: 90%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  border-radius: 8px;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 5px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 5px;
`;

export const ModalButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
`;
