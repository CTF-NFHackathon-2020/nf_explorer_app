import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import * as S from "./styles";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Input } from "../../components";

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
          <S.Row>
            <S.Clickable>
              <FontAwesome name="history" size={40} />
              <S.Title>History</S.Title>
            </S.Clickable>
            <S.Clickable>
              <FontAwesome name="share" size={40} />
              <S.Title>Share</S.Title>
            </S.Clickable>
            <S.Clickable
              style={{
                backgroundColor: "rgb(225, 145, 124)",
                width: 80,
                height: 80,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="plus" size={40} />
            </S.Clickable>
          </S.Row>
        </S.Container>

        <S.Line />

        <S.MinimumContainer
          style={{
            backgroundColor: "rgb(227, 227, 227)",
            flexGrow: 1,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            alignSelf: "center",
            width: Dimensions.get("window").width - 40,
            borderRadius: 20,
          }}
        >
          {[
            "Medication",
            "Date Prescribed",
            "Dosage",
            "Frequency",
            "Notes",
          ].map((el, index) => (
            <S.MinimumContainer
              style={{
                backgroundColor: "rgb(227, 227, 227)",
                flexGrow: 1,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
            >
              <S.SubTitle style={{ fontWeight: "500" }}>{el}</S.SubTitle>
              <Input />
            </S.MinimumContainer>
          ))}
        </S.MinimumContainer>
      </S.Scrollable>
    </SafeAreaView>
  );
}
