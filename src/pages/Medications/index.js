import React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import * as S from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { appointments, medications } from "../../mock";

export default function Main({ navigation }) {
  function renderSpecificPercentage(index, total) {
    if (index == 0) return "-3%";
    if (index == total) return "100%";
    return "50%";
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(246, 250, 255)" }}>
      <S.Scrollable contentContainerStyle={{}}>
        <S.Container style={{ padding: 10 }}>
          <S.Row style={{ justifyContent: "flex-start", marginLeft: 10 }}>
            <S.Clickable
              onPress={() => navigation.goBack()}
              style={{ flexDirection: "row" }}
            >
              <FontAwesome
                name="arrow-left"
                size={20}
                style={{ marginRight: 10 }}
              />
              <S.Title style={{ fontSize: 30 }}>Medications</S.Title>
            </S.Clickable>
          </S.Row>
        </S.Container>

        <S.Line />

        {medications.map(({ title, frequency, description }) => (
          <S.MinimumContainer
            style={{
              backgroundColor: "rgb(227, 227, 227)",
              flexGrow: 1,
              paddingVertical: 20,
              alignSelf: "center",
              width: Dimensions.get("window").width - 40,
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <S.MinimumContainer
              style={{
                backgroundColor: "rgb(227, 227, 227)",
                flexGrow: 1,
                paddingHorizontal: 20,
              }}
            >
              <S.SubTitle style={{ fontWeight: "500" }}>{title}</S.SubTitle>
              <S.SubTitle style={{ fontWeight: "bold" }}>
                {description}
              </S.SubTitle>
              <S.SubTitle>{frequency}</S.SubTitle>
            </S.MinimumContainer>
          </S.MinimumContainer>
        ))}
      </S.Scrollable>
    </SafeAreaView>
  );
}
