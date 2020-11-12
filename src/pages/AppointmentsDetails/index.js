import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import * as S from "./styles";

export default function Main({ navigation, route }) {
  const [attachment, setAttachment] = useState({});

  useEffect(() => {
    setAttachment(route.params.attachment);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(255, 255, 255)" }}>
      <S.Scrollable contentContainerStyle={{}}>
        <S.Container style={{ padding: 10, flex: 1 }}>
          <S.MinimumContainer
            style={{
              flexGrow: 1,
              paddingHorizontal: 20,
            }}
          >
            <S.SubTitle style={{ fontWeight: "500" }}>
              {attachment.date}
            </S.SubTitle>
            <S.SubTitle style={{ fontWeight: "bold" }}>
              {attachment.title}
            </S.SubTitle>
            <S.SubTitle>{attachment.location}</S.SubTitle>
          </S.MinimumContainer>
        </S.Container>

        <S.Line />

        <S.MinimumContainer
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            flexGrow: 1,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            alignSelf: "center",
            width: Dimensions.get("window").width - 40,
            borderRadius: 20,
          }}
        >
          <S.Container>
            <S.SubTitle style={{ fontWeight: "500" }}>Notes:</S.SubTitle>

            <S.SubTitle>
              {attachment.description?.replaceAll("•", "\n")}
            </S.SubTitle>
          </S.Container>
          <S.Container style={{ marginTop: 20 }}>
            <S.SubTitle style={{ fontWeight: "500" }}>Attachments:</S.SubTitle>
            <S.RowList horizontal style={{ marginTop: 10 }}>
              {attachment.attachments?.map((image) => (
                <S.Image source={image.source} />
              ))}
            </S.RowList>
          </S.Container>
        </S.MinimumContainer>
      </S.Scrollable>
    </SafeAreaView>
  );
}
