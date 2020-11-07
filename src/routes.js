import * as React from "react";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PerfilScreen from "./pages/Perfil";
import MainScreen from "./pages/Main";
import ArtistScreen from "./pages/Artist";
import AwardsScreen from "./pages/Awards";
import AwardScreen from "./pages/Award";
import GoalScreen from "./pages/Goal";
import LoginScreen from "./pages/Login";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

function App() {
  const [loaded] = useFonts({
    Sen: require("./../assets/fonts/Sen-Regular.ttf"),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Artist" component={ArtistScreen} />
        <Stack.Screen name="Awards" component={AwardsScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Goal" component={GoalScreen} />
        <Stack.Screen name="Award" component={AwardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
