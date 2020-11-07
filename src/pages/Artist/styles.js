import styled from "styled-components/native";
import { colors, typography } from "./../../settings/default";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Icon = styled.Image``;

export const ArtistBackground = styled.ImageBackground`
  width: 100%;
  height: auto;
  min-height: 300px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Clickable = styled.TouchableOpacity``;

export const View = styled.View`
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 220px;
  height: 220px;
  border-width: 3px;
  border-radius: 700px;
  border-color: red;
  margin-top: 20px;
`;

export const MinimumContainer = styled.View`
  min-height: 140px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Scrollable = styled.ScrollView`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${typography.h1};
  color: ${colors.white};
`;

export const SubTitle = styled.Text`
  font-size: ${typography.h2};
  color: ${colors.white};
`;

export const Row = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  width: 100%;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  padding: 10px;
`;

export const CompanyLogo = styled.Image``;
