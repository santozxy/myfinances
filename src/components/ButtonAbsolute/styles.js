import styled from "styled-components/native";

export const AddNewTransaction = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 50px;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const TitleButton = styled.Text`
  font-size: 35px;
  color: ${(props) => props.theme.colors.white};
`;
