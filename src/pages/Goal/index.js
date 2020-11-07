import React from "react";
import { awards } from "../../mock";
import * as S from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../settings/default";
import { Dimensions, SafeAreaView } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "expo-chart-kit";
import { Header } from "../../components";
export default function Awards(props) {
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
        <S.Scrollable style={{ flex: 1 }}>
          <S.PercentageChart source={require("./../../images/chart.png")} />
          <S.Icon
            source={require("./../../images/info.png")}
            style={{ marginLeft: 30 }}
          ></S.Icon>
          <S.View
            style={{
              flex: 1,
              marginTop: 20,
            }}
          >
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
                  maxWidth: Dimensions.get("window").width - 40,
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
                    <S.Fire
                      source={require("./../../images/fire.png")}
                    ></S.Fire>
                    <S.Point>{points}</S.Point>
                  </S.Points>
                </S.View>
              </S.Row>
              <S.Description numberOfLines={3}>{description}</S.Description>
            </S.View>
            <S.PercentageChart
              source={require("./../../images/chart_line.png")}
            />
          </S.View>
        </S.Scrollable>
      </SafeAreaView>
    </LinearGradient>
  );
}
