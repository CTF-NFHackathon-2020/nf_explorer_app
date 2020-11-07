import styled from "styled-components/native";
import { colors, typography } from "./../../settings/default";

export const Container = styled.View`
  background-color: ${colors.primary};
  flex: 1;
  align-items: center;
`;

export const Clickable = styled.TouchableOpacity``;

export const Point = styled.Text`
  font-family: Sen;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: white;
  align-self: center;
  margin-top: 5px;
`;

export const View = styled.View`
  justify-content: center;
`;

export const Scrollable = styled.ScrollView`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  font-weight: 700;
  font-family: Sen;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${colors.white};
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Description = styled.Text`
  font-family: Sen;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  text-align: left;
  color: white;
`;

export const Card = styled.Image`
  background-color: ${colors.secondary};
  width: 168px;
  border-radius: 10px;
  justify-content: center;
  padding: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Points = styled.View`
  padding: 10px;
  z-index: -1;
  bottom: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Icon = styled.Image``;

export const CompanyLogo = styled.Image``;

export const Fire = styled.Image`
  margin-right: 10px;
  margin-top: 5px;
`;

export const PercentageChart = styled.Image`
  align-self: center;
  margin: 20px 0px;
`;

export const Button = styled.View`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: white;
  font-size: 20px;
  color: white;
`;
