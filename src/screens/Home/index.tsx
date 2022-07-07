import React, { useEffect, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {
  Container,
  HeaderContent,
  HeaderFooter,
  Logo,
  SearchBar,
  Search,
  SearchText,
  FilterButton,
  HouseContent,
  InformationRentText,
  InformationRentDescription,
  HouseContentInfo,
  HouseContentText,
  Cards,
} from "./styles";

import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Todos",
    color: "#0B6BFD",
    uri_house:
      "https://fotos.vivadecora.com.br/decoracao-casas-modernas-escada-de-alvenaria-com-iluminacao-e-canteiros-revistavd-201900-proportional-height_cover_medium.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Casa",
    color: "#F7F7F7",
    uri_house:
      "https://www.lopes.com.br/blog/wp-content/uploads/2017/02/casas-bonitas.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Apartamento",
    color: "#F7F7F7",
    uri_house:
      "https://imgbr.imovelwebcdn.com/avisos/2/29/64/91/70/71/720x532/2637523394.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Condomínio",
    color: "#F7F7F7",
    uri_house:
      "http://www.tariimoveis.com.br/wp-content/uploads/2021/04/FACHADA-2-600x450.jpg",
  },
];

export function Home() {
  const [isFilled, setIsFilled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container>
        <HeaderContent>
          <Logo>colaaqui.BR</Logo>

          <SearchBar>
            <Search>
              <MaterialIcons name="search" size={26} color="#838383" />
              <SearchText
                placeholder="Pesquise por endereços..."
                placeholderTextColor="#838383"
              />
            </Search>

            <FilterButton>
              <MaterialIcons name="tune" size={26} color="#838383" />
            </FilterButton>
          </SearchBar>
        </HeaderContent>
        <HeaderFooter />

        <SafeAreaView>
          <FlatList
            data={DATA}
            horizontal
            contentContainerStyle={{ paddingLeft: 24, marginTop: 16 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Cards
                isFocused={isFocused}
                onPress={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              >
                <Text
                  style={{
                    fontWeight: "400",
                    color: isFocused ? "#FFF" : "#8b8b8b",
                  }}
                >
                  {item.title}
                </Text>
              </Cards>
            )}
          />
        </SafeAreaView>

        <SafeAreaView style={{ flex: 1, marginTop: 32 }}>
          <Text
            style={{
              marginLeft: 24,
              marginBottom: 16,
              fontWeight: "400",
              color: "#000",
              fontSize: 20,
            }}
          >
            Total
            <Text
              style={{
                fontWeight: "700",
                color: "#000",
                fontSize: 20,
              }}
            >
              de 6 Imóveis
            </Text>
          </Text>
          <FlatList
            style={{ paddingLeft: 24, paddingRight: 24 }}
            showsVerticalScrollIndicator={false}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  height: 124,
                  borderRadius: 10,
                  alignItems: "center",
                  paddingLeft: 12,
                  flexDirection: "row",
                  marginBottom: 8,
                  backgroundColor: "#FFFFFF",

                  shadowOffset: { width: 0, height: 2 },
                  shadowColor: "black",
                  shadowOpacity: 0.1,
                }}
              >
                <Image
                  style={{ width: 114, height: 102, borderRadius: 10 }}
                  source={{
                    uri: `${item.uri_house}`,
                  }}
                />

                <HouseContent>
                  <InformationRentText>R$ 952.899.00</InformationRentText>
                  <InformationRentDescription>
                    Em até 24x de R$ 39.669,00
                  </InformationRentDescription>

                  <HouseContentInfo>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 4,
                      }}
                    >
                      <MaterialIcons
                        name="king-bed"
                        size={20}
                        color="#858585"
                      />
                      <HouseContentText>3</HouseContentText>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 4,
                      }}
                    >
                      <MaterialIcons
                        name="room-preferences"
                        size={20}
                        color="#858585"
                      />
                      <HouseContentText>2</HouseContentText>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 4,
                      }}
                    >
                      <MaterialIcons name="room" size={20} color="#858585" />
                      <HouseContentText>2</HouseContentText>
                    </View>
                  </HouseContentInfo>
                </HouseContent>
              </View>
            )}
          />
        </SafeAreaView>
      </Container>
    </KeyboardAvoidingView>
  );
}
