import React from "react";
import { awards } from "../../mock";
import * as S from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../settings/default";
import { Dimensions } from "react-native";
import { Header } from "../../components";

export default function Awards(props) {
  const { id, title, image, description, points } = awards[0];

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#511135", "black"]}
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
      <S.Scrollable style={{ flex: 1 }}>
        <Header {...props} />
        <S.View
          style={{
            flex: 1,
          }}
        >
          <S.Card
            source={require("./../../images/camisa.png")}
            resizeMode="contain"
          />
          <S.View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginVertical: 20,
              paddingHorizontal: 30,
            }}
          >
            <S.Row
              style={{
                maxWidth: Dimensions.get("window").width,
                justifyContent: "space-between",
              }}
            >
              <S.Title
                numberOfLines={3}
                style={{
                  maxWidth: Dimensions.get("window").width - 40,
                }}
              >
                {title}
              </S.Title>
              <S.View>
                <S.Points
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <S.Fire source={require("./../../images/fire.png")}></S.Fire>
                  <S.Point>{points}</S.Point>
                </S.Points>
              </S.View>
            </S.Row>
            <S.Description numberOfLines={3}>{description}</S.Description>
          </S.View>
        </S.View>
      </S.Scrollable>
      <S.Row style={{ justifyContent: "space-evenly", marginBottom: 30 }}>
        <S.Clickable>
          <LinearGradient
            // Background Linear Gradient
            colors={["#FF0604", "#FF7A02"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "100%",
              flex: 1,
              width: "100%",
              borderRadius: 10,
            }}
          />
          <S.Button>
            <S.Title style={{ alignSelf: "center" }}>Pegar agora</S.Title>
          </S.Button>
        </S.Clickable>
        <S.Clickable onPress={() => props.navigation.navigate("Goal")}>
          <S.Button>
            <S.Title style={{ alignSelf: "center" }}>Meu objetivo</S.Title>
          </S.Button>
        </S.Clickable>
      </S.Row>
    </LinearGradient>
  );
}
