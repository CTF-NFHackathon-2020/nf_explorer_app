import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import * as S from "./styles";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function Main({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(246, 250, 255)" }}>
      <S.Scrollable contentContainerStyle={{ marginTop: 40 }}>
        <S.Clickable
          style={{
            backgroundColor: "rgb(225, 145, 124)",
            width: 60,
            height: 60,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 10,
            zIndex: 1,
            top: -40,
          }}
        >
          <FontAwesome name="plus" size={25} />
        </S.Clickable>

        <S.MinimumContainer
          style={{
            backgroundColor: "rgb(227, 227, 227)",
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingVertical: 40,
            marginHorizontal: 20,
            alignSelf: "center",
            width: Dimensions.get("window").width - 60,
            borderRadius: 20,
          }}
        >
          {["Medication", "Appointment", "Genetics", "Note", "Image Scan"].map(
            (el, index) => (
              <S.Clickable
                onPress={() => navigation.navigate("Medication")}
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <S.MinimumContainer
                  style={{
                    backgroundColor: "rgb(227, 227, 227)",
                    flexGrow: 1,
                    paddingHorizontal: 20,
                    paddingVertical: 30,
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome
                    name="circle"
                    style={{
                      position: "absolute",
                      left: 0,
                    }}
                    color={"rgb(225, 145, 124)"}
                    size={20}
                  />

                  <S.SubTitle style={{ fontWeight: "500" }}>{el}</S.SubTitle>
                </S.MinimumContainer>
              </S.Clickable>
            )
          )}
        </S.MinimumContainer>
      </S.Scrollable>
    </SafeAreaView>
  );
}
