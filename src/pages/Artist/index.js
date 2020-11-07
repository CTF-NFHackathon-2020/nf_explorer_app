import React from "react";
import { View, Text } from "react-native";
import * as S from "./styles";
import { colors, typography } from "./../../settings/default";
import { musics } from "../../mock";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "./../../components";

export default function index(props) {
  return (
    <S.Container>
      <LinearGradient
        // Background Linear Gradient
        colors={["#A9025F", "#000000"]}
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
        <S.Scrollable showsVerticalScrollIndicator={false}>
          <Header {...props} />
          <S.Container>
            <S.View style={{ width: "100%" }}>
              <S.ArtistBackground
                style={{
                  maxHeight: 350,
                }}
                source={require("./../../images/anitta.png")}
              >
                <S.View
                  style={{
                    backgroundColor: "rgba(0,0,0,0.25)",
                    height: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <S.Title
                    style={{
                      fontWeight: "600",
                      margin: 10,
                      fontSize: typography.h0,
                    }}
                  >
                    Caru
                  </S.Title>
                </S.View>
              </S.ArtistBackground>
            </S.View>
            <S.Row
              style={{
                justifyContent: "space-between",
                paddingHorizontal: 20,
                width: "100%",
              }}
            >
              <S.View>
                <S.Row>
                  <S.Clickable
                    onPress={() => props.navigation.navigate("Awards")}
                  >
                    <S.SubTitle
                      style={{
                        alignSelf: "flex-start",
                        marginTop: 20,
                        marginLeft: 20,
                        justifyContent: "center",
                        marginVertical: 20,
                      }}
                    >
                      Ranking
                    </S.SubTitle>
                  </S.Clickable>

                  <S.Icon
                    style={{ marginLeft: 10 }}
                    source={require("./../../images/brasil.png")}
                  />
                </S.Row>
              </S.View>
              <S.View>
                <S.View style={{ flexDirection: "row" }}>
                  <S.Icon
                    style={{ marginLeft: 10 }}
                    source={require("./../../images/sort.png")}
                  />
                  <S.Icon
                    style={{ marginLeft: 20 }}
                    source={require("./../../images/filter.png")}
                  />
                </S.View>
              </S.View>
            </S.Row>
            <S.MinimumContainer style={{ paddingHorizontal: 20 }}>
              {musics.map(({ image, title, subtitle, id, position, genre }) => (
                <S.Card
                  key={id}
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <S.Row>
                    <S.CompanyLogo source={image} />
                    <S.Row style={{ justifyContent: "space-between" }}>
                      <S.View style={{ marginLeft: 15 }}>
                        <S.SubTitle>{title}</S.SubTitle>
                        <S.SubTitle style={{ fontSize: typography.h4 }}>
                          {subtitle}
                        </S.SubTitle>
                      </S.View>
                      <S.View>
                        <S.SubTitle
                          style={{
                            fontSize: typography.h0,
                            color: colors.white,
                            textAlign: "center",
                          }}
                        >
                          {position}º
                        </S.SubTitle>

                        <S.SubTitle
                          style={{
                            fontSize: typography.h4,
                            color: colors.white,
                            textAlign: "center",
                          }}
                        >
                          {genre}
                        </S.SubTitle>
                      </S.View>
                    </S.Row>
                  </S.Row>
                </S.Card>
              ))}
            </S.MinimumContainer>
          </S.Container>
        </S.Scrollable>
      </LinearGradient>
    </S.Container>
  );
}
