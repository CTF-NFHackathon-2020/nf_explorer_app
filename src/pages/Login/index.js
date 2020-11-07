import React from "react";
import { awards } from "../../mock";
import * as S from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../settings/default";
import { Dimensions, KeyboardAvoidingView, Platform } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "expo-chart-kit";
export default function Awards({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundColor: "transparent",
    decimalPlaces: 2, // optional, defaults to 2dp
    backgroundColor: "transparent",
    backgroundGradientFrom: "transparent",
    backgroundGradientTo: "transparent",
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    withHorizontalLabels: false,
    withVerticalLabels: false,
  };

  const { id, title, image, description, points } = awards[0];
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#BD026A", "black"]}
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
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <S.View
          style={{
            flex: 1,
            marginHorizontal: 20,
            paddingVertical: 50,
          }}
        >
          <S.Title>WOW</S.Title>
          <S.SubTitle>RANK</S.SubTitle>
        </S.View>

        <S.View
          style={{
            flex: 1,

            paddingVertical: 50,
            marginHorizontal: 20,
            justifyContent: "space-evenly",
          }}
        >
          <S.View>
            <S.Input
              placeholder="Digite seu e-mail"
              autoCapitalize={false}
              autoCompleteType={false}
              autoCorrect={false}
              placeholderTextColor="white"
            />
          </S.View>
          <S.View>
            <S.Input
              placeholder="Digite sua senha"
              placeholderTextColor="white"
              autoCapitalize={false}
              autoCompleteType={false}
              autoCorrect={false}
              secureTextEntry
            />
          </S.View>
          <S.View style={{ width: 200, alignSelf: "center" }}>
            <S.Clickable onPress={() => navigation.navigate("Main")}>
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
                <S.Title
                  style={{
                    fontSize: 16,
                    alignItems: "center",
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                >
                  Entrar
                </S.Title>
              </S.Button>
            </S.Clickable>
          </S.View>
        </S.View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
