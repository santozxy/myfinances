import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 170px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 10px 5px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const Image = styled.Image`
  height: 130px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Title = styled.Text`
  margin: 3px 0;
  font-size: 17px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;
