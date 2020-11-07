import styled from "styled-components/native";
import { colors, typography } from "./../../settings/default";

export const Container = styled.View`
  align-items: center;
`;

export const Clickable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const UserTitle = styled.Text`
  font-family: Sen;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  color: black;
  text-align: left;
`;

export const Points = styled.Text`
  font-family: Sen;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  margin-left: 10px;
  color: black;
`;

export const TopChart = styled.Image`
  width: 100%;
  height: 240px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-width: 3px;
  border-radius: 700px;
  border-color: red;
  margin: 10px;
`;

export const Line = styled.View`
  width: 200;
  background-color: "rgb(225, 145, 124)";
  height: 5;
  border-radius: 20px;
  margin: 20px 20px;
`;

export const MinimumContainer = styled.View`
  justify-content: space-evenly;
`;

export const Icon = styled.Image`
  align-self: center;
`;

export const Scrollable = styled.ScrollView``;

export const Title = styled.Text`
  font-size: ${typography.h1};
  color: ${colors.black};
`;

export const SubTitle = styled.Text`
  font-size: ${typography.h2};
  color: ${colors.black};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  width: 132px;
  height: 193px;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Layer = styled.ImageBackground`
  flex: 1;
  margin-right: 15px;
`;

export const RowList = styled.ScrollView``;

export const MenuBottom = styled.View`
  border-color: black;
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const Button = styled.View`
  border-color: black;
  border-radius: 20px;
  height: 50px;
  width: 50px;
  justify-content: center;
`;
