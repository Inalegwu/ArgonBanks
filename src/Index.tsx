import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Pin from "./Screens/Pin";
import ForgotPin from "./Screens/ForgotPin";
import CreateAccount from "./Screens/CreateAccount";
import AllTransactions from "./Screens/AllTransactions";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Pin} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ForgotPin" component={ForgotPin} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="AllTransactions" component={AllTransactions} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
