import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;