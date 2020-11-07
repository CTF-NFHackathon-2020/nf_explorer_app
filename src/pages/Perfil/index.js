import React from "react";
import * as S from "./styles";
import { colors, typography } from "./../../settings/default";
import { topArtists } from "../../mock";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";
import { Header } from "./../../components";

export default function index(props) {
  return (
    <S.Container>
      <LinearGradient
        // Background Linear Gradient
        colors={["#000000", "#470D30"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
          flex: 1,
          width: "100%",
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Header {...props} />
          <S.Scrollable showsVerticalScrollIndicator={false}>
            <S.Container>
              <S.Clickable>
                <S.Avatar source={require("./../../images/person.png")} />
              </S.Clickable>
              <S.MinimumContainer>
                <S.UserTitle style={{ fontFamily: "Sen" }}>
                  Bábara Pigle
                </S.UserTitle>
                <S.Favorite>Maior fã da Caru no Brasil</S.Favorite>
              </S.MinimumContainer>
              <S.MinimumContainer>
                <S.Row>
                  <S.Card>
                    <S.SubTitle style={{ color: colors.orange }}>
                      Essa semana
                    </S.SubTitle>
                    <S.SubTitle
                      style={{
                        color: colors.white,
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: typography.h1,
                      }}
                    >
                      3.585
                    </S.SubTitle>
                    <S.SubTitle
                      style={{ color: colors.white, textAlign: "center" }}
                    >
                      Pts
                    </S.SubTitle>
                  </S.Card>
                  <S.Card>
                    <S.SubTitle style={{ color: colors.orange }}>
                      Total
                    </S.SubTitle>
                    <S.SubTitle
                      style={{
                        color: colors.white,
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: typography.h1,
                      }}
                    >
                      250.441
                    </S.SubTitle>
                    <S.SubTitle
                      style={{ color: colors.white, textAlign: "center" }}
                    >
                      Pts
                    </S.SubTitle>
                  </S.Card>
                </S.Row>
              </S.MinimumContainer>
              <S.MinimumContainer
                style={{ justifyContent: "flex-start", minHeight: 40 }}
              >
                <S.SubTitle style={{ alignSelf: "flex-start" }}>
                  Top 10 artistas preferidas
                </S.SubTitle>
              </S.MinimumContainer>
              {topArtists.map(({ title, points }, index) => (
                <S.Row
                  style={{
                    justifyContent: "flex-start",
                    marginVertical: 5,
                    paddingHorizontal: 20,
                  }}
                >
                  <S.Description>{index + 1} #</S.Description>
                  <S.View
                    style={{
                      flexDirection: "row",
                      flexGrow: 1,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <S.Description>{title}</S.Description>
                    <S.View style={{ flexDirection: "row" }}>
                      <S.SubTitle
                        style={{ color: colors.orange, marginRight: 10 }}
                      >
                        {points}
                      </S.SubTitle>
                      <S.SubTitle>Pts</S.SubTitle>
                    </S.View>
                  </S.View>
                </S.Row>
              ))}
            </S.Container>
          </S.Scrollable>
        </SafeAreaView>
      </LinearGradient>
    </S.Container>
  );
}
