import * as React from "react";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "./pages/Menu";
import MainScreen from "./pages/Main";
import AppointmentsDetailsScreen from "./pages/AppointmentsDetails";
import MedicationScreen from "./pages/Medication";
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
        initialRouteName="Main"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="AppointmentsDetails"
          component={AppointmentsDetailsScreen}
        />
        <Stack.Screen name="Medication" component={MedicationScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
