import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import * as S from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { appointments } from "../../mock";

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
            <S.Clickable>
              <S.CustomIcon
                source={require("./../../images/medications.png")}
              />
              <S.Title>Medications</S.Title>
            </S.Clickable>
            <S.Clickable
              onPress={() => navigation.navigate("Menu")}
              style={{
                backgroundColor: "rgb(225, 145, 124)",
                width: 60,
                height: 60,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="plus" size={25} />
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
          {appointments.map(
            ({ date, title, location, description, attachments }, index) => (
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
                  onPress={() =>
                    navigation.navigate("AppointmentsDetails", {
                      attachment: {
                        date,
                        title,
                        location,
                        description,
                        attachments,
                      },
                    })
                  }
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <S.SubTitle style={{ fontWeight: "500" }}>{date}</S.SubTitle>
                  <S.SubTitle style={{ fontWeight: "bold" }}>
                    {title}
                  </S.SubTitle>
                  <S.SubTitle>{location}</S.SubTitle>
                </S.Clickable>
              </S.MinimumContainer>
            )
          )}
        </S.MinimumContainer>
      </S.Scrollable>
    </SafeAreaView>
  );
}
