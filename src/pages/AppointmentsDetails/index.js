import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import * as S from "./styles";
import ImageZoom from "react-native-image-pan-zoom";
import { FontAwesome } from "@expo/vector-icons";

export default function Main({ navigation, route }) {
  const [attachment, setAttachment] = useState({});
  const [image, setImage] = useState(null);

  useEffect(() => {
    setAttachment(route.params.attachment);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(255, 255, 255)" }}>
      {image ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            position: "absolute",
            zIndex: 1,
          }}
        >
          <S.Clickable
            onPress={() => setImage(null)}
            style={{
              position: "absolute",
              height: 50,
              width: 50,
              backgroundColor: "black",
              zIndex: 5,
              top: 50,
              right: 30,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "white",
            }}
          >
            <FontAwesome name="close" color="white" size={20} />
          </S.Clickable>

          <ImageZoom
            cropWidth={Dimensions.get("window").width}
            cropHeight={Dimensions.get("window").height}
            imageWidth={200}
            imageHeight={200}
            enableSwipeDown
            enableDoubleClickZoom
            enableCenterFocus
          >
            <S.Image
              enableHorizontalBounce={true}
              style={{ width: 200, height: 200 }}
              source={image}
            />
          </ImageZoom>
        </View>
      ) : null}
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
                <S.Clickable onPress={() => setImage(image.url)}>
                  <S.Image source={image.url} />
                </S.Clickable>
              ))}
            </S.RowList>
          </S.Container>
        </S.MinimumContainer>
      </S.Scrollable>
    </SafeAreaView>
  );
}
