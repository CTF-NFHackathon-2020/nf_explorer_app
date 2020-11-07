import React from "react";
import { awards } from "../../mock";
import * as S from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../settings/default";
import { Dimensions, SafeAreaView } from "react-native";
import { Header } from "../../components";

export default function Awards(props) {
  const { navigation } = props;

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
      <SafeAreaView style={{ flex: 1 }}>
        <Header {...props} />
        <S.Scrollable style={{ flex: 1, marginTop: 30 }}>
          <S.View
            style={{
              flex: 1,
              marginTop: 20,
            }}
          >
            {awards.map(({ id, image, title, description, points }) => (
              <S.Row
                key={id}
                style={{
                  paddingHorizontal: 10,
                  alignContent: "space-between",
                }}
              >
                <S.Clickable onPress={() => navigation.navigate("Award")}>
                  <S.Card source={image} />
                  <S.Points
                    style={{
                      flexDirection: "row",
                      borderRadius: 20,
                      borderWidth: 1,
                    }}
                  >
                    <LinearGradient
                      // Background Linear Gradient
                      colors={["#FFA601", "#FF0604"]}
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        height: "100%",
                        flex: 1,
                        width: 166,
                        height: 45,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}
                    ></LinearGradient>
                    <S.Fire
                      source={require("./../../images/white_fire.png")}
                    ></S.Fire>
                    <S.Point>{points}</S.Point>
                  </S.Points>
                </S.Clickable>
                <S.View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginVertical: 20,
                    width: Dimensions.get("window").width - 180,
                    paddingHorizontal: 30,
                  }}
                >
                  <S.Title numberOfLines={3}>{title}</S.Title>
                  <S.Description numberOfLines={3}>{description}</S.Description>
                  <S.Clickable onPress={() => navigation.navigate("Award")}>
                    <S.SubTitle
                      style={{ color: colors.orange, textAlign: "right" }}
                    >
                      Ver mais
                    </S.SubTitle>
                  </S.Clickable>
                </S.View>
              </S.Row>
            ))}
          </S.View>
        </S.Scrollable>
      </SafeAreaView>
    </LinearGradient>
  );
}
