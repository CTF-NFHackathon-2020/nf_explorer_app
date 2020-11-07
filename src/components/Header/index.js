import React from "react";
import { Dimensions } from "react-native";
import * as S from "./styles";

export default function Header({ navigation }) {
  return (
    <S.View
      style={{
        position: "absolute",
        width: "100%",
        height: 100,
        zIndex: 999,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <S.Clickable
        style={{ top: 40, padding: 20 }}
        onPress={() => navigation.goBack()}
      >
        <S.Icon source={require("./../../images/back.png")}></S.Icon>
      </S.Clickable>
      <S.Clickable
        onPress={() => console.log("click on menu")}
        style={{
          top: 40,
          left: Dimensions.get("window").width - 80,
          zIndex: 100,
          padding: 20,
          position: "absolute",
        }}
      >
        <S.Icon source={require("./../../images/menu.png")}></S.Icon>
      </S.Clickable>
    </S.View>
  );
}
