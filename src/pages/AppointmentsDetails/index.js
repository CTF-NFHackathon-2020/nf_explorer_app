import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import * as S from "./styles";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function Main({ navigation }) {
  function renderSpecificPercentage(index, total) {
    if (index == 0) return "-3%";
    if (index == total) return "100%";
    return "50%";
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(255, 255, 255)" }}>
      <S.Scrollable contentContainerStyle={{}}>
        <S.Container style={{ padding: 10, flex: 1 }}>
          <S.MinimumContainer
            style={{
              flexGrow: 1,
              paddingHorizontal: 20,
            }}
          >
            <S.SubTitle style={{ fontWeight: "500" }}>Oct 20, 2020</S.SubTitle>
            <S.SubTitle style={{ fontWeight: "bold" }}>
              NF1 Annual Checkup
            </S.SubTitle>
            <S.SubTitle>New York, NY</S.SubTitle>
          </S.MinimumContainer>
        </S.Container>

        <S.Line />

        <S.MinimumContainer
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            flexGrow: 1,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            alignSelf: "center",
            width: Dimensions.get("window").width - 40,
            borderRadius: 20,
          }}
        >
          <S.Container>
            <S.SubTitle style={{ fontWeight: "500" }}>Notes:</S.SubTitle>

            <S.SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              suscipit interdum dui, ac accumsan ligula vehicula non. Curabitur
              dignissim pellentesque libero, sit amet posuere felis accumsan sit
              amet. Nam tortor mi, volutpat a magna sed, congue feugiat ipsum.
              Suspendisse nec leo volutpat, pharetra tortor nec, dignissim
              augue. Sed feugiat erat ac ligula porta consequat. Phasellus
              ultricies dui neque, ac commodo ex sagittis cursus. Suspendisse
              placerat placerat tortor id ullamcorper. Duis quis dolor pharetra,
              volutpat nulla efficitur, egestas mi.
            </S.SubTitle>
          </S.Container>
          <S.Container style={{ marginTop: 20 }}>
            <S.SubTitle style={{ fontWeight: "500" }}>Attachments:</S.SubTitle>
          </S.Container>
        </S.MinimumContainer>
      </S.Scrollable>
    </SafeAreaView>
  );
}
