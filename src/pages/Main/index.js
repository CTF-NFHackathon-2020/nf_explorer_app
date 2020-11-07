import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import * as S from "./styles";
import { colors, typography } from "./../../settings/default";
import { artists } from "../../mock";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";

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
              onPress={() => navigation.navigate("Menu")}
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
            paddingVertical: 40,
            marginHorizontal: 20,
            alignSelf: "center",
            width: Dimensions.get("window").width - 40,
            borderRadius: 20,
          }}
        >
          {[1, 2, 3].map((el, index) => (
            <S.MinimumContainer
              style={{
                backgroundColor: "rgb(227, 227, 227)",
                flexGrow: 1,
                paddingHorizontal: 20,
                borderLeftWidth: 3,
                borderLeftColor: "rgb(225, 145, 124)",
                paddingBottom: index == 2 ? 0 : 50,
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  position: "absolute",
                  left: -9,
                  top: renderSpecificPercentage(index, 2),
                }}
                color={"rgb(225, 145, 124)"}
                size={20}
              />
              <S.Clickable
                onPress={() => navigation.navigate("AppointmentsDetails")}
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <S.SubTitle style={{ fontWeight: "500" }}>
                  Oct 20, 2020
                </S.SubTitle>
                <S.SubTitle style={{ fontWeight: "bold" }}>
                  NF1 Annual Checkup
                </S.SubTitle>
                <S.SubTitle>New York, NY</S.SubTitle>
              </S.Clickable>
            </S.MinimumContainer>
          ))}
        </S.MinimumContainer>
      </S.Scrollable>
    </SafeAreaView>
  );
}
