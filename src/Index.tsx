import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Pin,Home,ForgotPin,CreateAccount,AllTransactions,PayScreen,SendScreen,RecieveScreen,AirtimeScreen} from "./Screens"
import {MainStackParamList} from "./utils/types"

const Stack = createNativeStackNavigator<MainStackParamList>();

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
      <Stack.Screen name="Pay" component={PayScreen} />
      <Stack.Screen name="Send" component={SendScreen} />
      <Stack.Screen name="Recieve" component={RecieveScreen} />
      <Stack.Screen name="Airtime" component={AirtimeScreen} />
    </Stack.Navigator>
  );
}
