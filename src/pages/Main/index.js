import React from "react";
import { SafeAreaView } from "react-native";
import * as S from "./styles";
import { colors, typography } from "./../../settings/default";
import { artists } from "../../mock";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";

export default function Main({ navigation }) {
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
          <S.Scrollable>
            <S.Container style={{ padding: 10 }}>
              <S.MinimumContainer>
                <S.Row>
                  <S.Clickable onPress={() => navigation.navigate("Perfil")}>
                    <S.Avatar source={require("./../../images/person.png")} />
                  </S.Clickable>
                  <S.Container
                    style={{
                      padding: 10,
                      justifyContent: "center",
                    }}
                  >
                    <S.Row style={{ justifyContent: "space-between" }}>
                      <S.UserTitle style={{ alignSelf: "flex-start" }}>
                        Bábara Pigle
                      </S.UserTitle>
                      <S.Icon source={require("./../../images/menu.png")} />
                    </S.Row>
                    <S.Row
                      style={{
                        justifyContent: "flex-end",
                      }}
                    >
                      <S.Icon source={require("./../../images/fire.png")} />
                      <S.Points>250441 Pts</S.Points>
                    </S.Row>
                  </S.Container>
                </S.Row>
                <S.Row style={{ justifyContent: "space-between" }}>
                  <S.UserTitle style={{ alignSelf: "flex-start" }}>
                    Mais Ouvidas na semana
                  </S.UserTitle>
                  <S.Icon source={require("./../../images/search.png")} />
                </S.Row>
              </S.MinimumContainer>
              <S.MinimumContainer>
                <S.RowList horizontal showsHorizontalScrollIndicator={false}>
                  {artists.map(({ id, title, image }) => (
                    <S.Layer
                      key={id}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="cover"
                      source={image}
                    >
                      <S.Card>
                        <S.Clickable
                          style={{
                            width: 132,
                            height: 193,
                            borderRadius: 10,
                            padding: 10,
                          }}
                          onPress={() => navigation.navigate("Artist")}
                        >
                          <S.SubTitle style={{ marginTop: 100 }}>
                            {title}
                          </S.SubTitle>
                        </S.Clickable>
                      </S.Card>
                    </S.Layer>
                  ))}
                </S.RowList>
              </S.MinimumContainer>
            </S.Container>
            <S.TopChart
              source={require("./../../images/chart_listen.png")}
              resizeMode="contain"
            />
          </S.Scrollable>
        </SafeAreaView>
        <S.MenuBottom>
          <S.Clickable>
            <S.Button>
              <S.Icon source={require("./../../images/preset.png")}></S.Icon>
            </S.Button>
          </S.Clickable>
          <S.Clickable>
            <S.Button>
              <S.Icon source={require("./../../images/heart.png")}></S.Icon>
            </S.Button>
          </S.Clickable>
          <S.Clickable>
            <S.Button>
              <S.Icon
                source={require("./../../images/button_fire.png")}
              ></S.Icon>
            </S.Button>
          </S.Clickable>
          <S.Clickable>
            <S.Button>
              <S.Icon source={require("./../../images/share.png")}></S.Icon>
            </S.Button>
          </S.Clickable>
          <S.Clickable>
            <S.Button>
              <S.Icon source={require("./../../images/info.png")}></S.Icon>
            </S.Button>
          </S.Clickable>
        </S.MenuBottom>
      </LinearGradient>
    </S.Container>
  );
}
