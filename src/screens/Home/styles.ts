import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const HeaderContent = styled.View`
  height: 160px;
  padding: 0 24px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const HeaderFooter = styled.View`
  height: 28px;
`;

export const Logo = styled.Text`
  font-size: 22px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.color.background};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const SearchBar = styled.View`
  height: 56px;
  margin-bottom: -28px;
  flex-direction: row;
`;

export const Search = styled.View`
  width: 276px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.color.cards};
`;

export const SearchText = styled.Text`
  font-size: 14px;
  margin-left: 8px;
  color: ${({ theme }) => theme.color.text_information};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const FilterButton = styled.View`
  flex: 1;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.cards};
  margin-left: 4px;
`;

export const HouseContent = styled.View`
  margin-left: 20px;
  justify-content: center;
`;

export const InformationRentText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.color.first_black};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const InformationRentDescription = styled.Text`
  font-size: 10px;
  margin-top: 2px;
  color: ${({ theme }) => theme.color.text_information};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const HouseContentInfo = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
`;

export const HouseContentText = styled.Text`
  font-size: 12px;
  margin-left: 2px;
  color: ${({ theme }) => theme.color.text_information};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;
